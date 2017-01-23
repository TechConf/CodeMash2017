package main

// This is a very simple example of a go-kit service. When executed it will
// start an HTTP server that listens on localhost:8080 and accepts POST requests
// with a simple JSON payload of {"name": "Your name here"}
// One could use cURL to make a request like this:
// curl -v -X POST -H "Content-Type: application/json" -d '{"name": "Aaron"}' http://localhost:8080/hello

// For more indepth examples please head to gokit.io/examples, and read over
// the many excellent exaples provided there.

import (
	"encoding/json"
	"errors"
	"net/http"
	"os"
	"strings"
	"time"

	"golang.org/x/net/context"

	"github.com/go-kit/kit/endpoint"
	log "github.com/go-kit/kit/log"
	kithttp "github.com/go-kit/kit/transport/http"
)

// GreetService is the interface that defines our service, and it will enable
// us to create compatible middlewares to add functionality.
type GreetService interface {
	Hello(string) (string, error)
}

// Here we concrete type that we can use to implement the GreetService interface.
type greetService struct{}

// Create a struct to represent requests to the service.
type helloRequest struct {
	Name string `json:"name,omitempty"`
}

// Create a struct to represent responses from the service.
type helloResponse struct {
	Greeting string `json:"greeting,omitempty"`
	Err      error  `json:"err,omitempty"`
}

// Go Kit uses the RPC model to communicate. So it expects us to not only create
// structs for requests and responses for each endpoint, but also functions to
// decode requests and encode responses.

func decodeHelloRequest(_ context.Context, r *http.Request) (interface{}, error) {
	var request helloRequest
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		return nil, err
	}
	return request, nil
}

func encodeHelloResponse(_ context.Context, w http.ResponseWriter, response interface{}) error {
	return json.NewEncoder(w).Encode(response)
}

// Hello is the func that is required to implement the GreetService interface.
// creating this func makes the greetService type implicitly implement the
// GreetService interface.
func (g greetService) Hello(s string) (string, error) {
	if s == "" {
		return "", errors.New("no name provided")
	}
	return "Hello there, " + strings.Title(s), nil
}

// A Go Kit Endpoint is a func that takes a Context and a interface{} (empty interface)
// as parameters and returns an empty interface type and an error.
func makeHelloEndpoint(svc GreetService) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(helloRequest)
		resp, err := svc.Hello(req.Name)
		if err != nil {
			return helloResponse{resp, err}, nil
		}
		return helloResponse{resp, nil}, nil
	}
}

// Here we create a middleware type that will implment the GreetService interface
type loggingMiddleware struct {
	logger log.Logger
	next   GreetService
}

// This instance of the Hello func makes the loggingMiddleware implment the
// GreetService interface, which makes it compatible with the greetService type,
// and allows us to chain different types of middlewares together to extend the
// service.
func (mw loggingMiddleware) Hello(s string) (output string, err error) {
	defer func(begin time.Time) {
		mw.logger.Log(
			"method", "Hello",
			"input", s,
			"err", err,
			"took", time.Since(begin),
		)
	}(time.Now())

	output, err = mw.next.Hello(s)
	return
}

func main() {
	ctx := context.Background()
	logger := log.NewLogfmtLogger(os.Stderr)

	var svc GreetService
	svc = greetService{}
	svc = loggingMiddleware{logger, svc}

	helloHandler := kithttp.NewServer(
		ctx,
		makeHelloEndpoint(svc),
		decodeHelloRequest,
		encodeHelloResponse,
	)

	http.Handle("/hello", helloHandler)
	logger.Log("msg", "HTTP", "addr", ":8080")
	logger.Log("err", http.ListenAndServe(":8080", nil))

}

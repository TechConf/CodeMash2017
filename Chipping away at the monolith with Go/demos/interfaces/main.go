package main

import (
	"errors"
	"fmt"
	"log"
	"strings"
)

type capitalized interface {
	Capitalize() string
}

type saidName string

func (n saidName) Capitalize() string {
	return strings.Title(string(n))
}

type yelledName string

func (n yelledName) Capitalize() string {
	return strings.ToUpper(string(n))
}

func main() {
	dilbertSays := saidName("aaron")
	howardSays := yelledName(dilbertSays)

	speakers := []capitalized{dilbertSays, howardSays}

	for _, speaker := range speakers {
		say(speaker)
	}

}

func say(speaker interface{}) {
	var whoSays, greeting, name string

	switch val := speaker.(type) {
	case saidName:
		whoSays = "Dilbert"
		greeting = "Hello"
		name = val.Capitalize()
	case yelledName:
		whoSays = "Loud Howard"
		greeting = "HELLO"
		name = val.Capitalize()
	default:
		log.Fatal(errors.New("Unknown type"))
	}

	fmt.Printf("%s says, '%s, %s'\n", whoSays, greeting, name)
}

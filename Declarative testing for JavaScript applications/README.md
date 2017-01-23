# Resources and Demos for "Declarative testing for JavaScript applications"
Items in this repo are a companion to the talk "Declarative testing for JavaScript applications" talk that was given at CodeMash 2017 on January 12, 2017 at 10:30 AM at the Kalahari Resort in Sandusky, OH.

## Online Resources

#### Slides
The slide deck for the talk in available here: [Slide Deck](https://docs.google.com/presentation/d/1qf0X10Hsqy04ajyCQaoCtbZnDTdQZmS_YHTsxK1xyJg/edit?usp=sharing)

#### The Speaker
Obviously you found me here on GitHub, but you can also reach me by using the methods shown below. Please reach out to me if you have questions or feedback about the talk. I especially appreciate hearing from folks who wanted more out of the talk. This is how my future talks get better!
- Twitter: [@naunga](https://twitter.com/naunga)
- Email: [aaron.salvo@gmail.com](mailto:aaron.salvo@gmail.com)
- LinkedIn: [Aaron Salvo](https://www.linkedin.com/in/aaronsalvo)

### Tools Used

#### Testing
- [Karma Test Runner](https://karma-runner.github.io/1.0/index.html) - Run all the tests!
- [Jasmine](https://jasmine.github.io/) -- BDD framework for JavaScript.  
- [Yeoman](http://yeoman.io) -- "The web's scaffolding tool."

#### Demo app built with...
- [AngularJS 1.x](https://angularjs.org/) - Superheroic JavaScript MVW framwork.
- [Grunt](http://gruntjs.com/) - _The_ Javascript Task Runner.
- [lite-server](https://github.com/johnpapa/lite-server) - Lightweight node server.
- [Browsersync](https://browsersync.io/) - Time-saving synchronised browser testing.

## Demo Code

### Prerequisites
You will need to have npm installed in order to run the examples.

### Setting up the example app
The following steps will get you up and running after you've cloned the repo:
0. `cd` into the newly cloned directory (we will assume `declarative/`)
0. Run `npm install`
0. Run `grunt` to build.
0. Run `npm start` to launch the app. If everything ran correctly a new browser window should launch once the lite-server starts.

### Setting up the Yeoman generator
As demonstrated in the talk, there is a Yeoman Generator that will create a new component including the .spec.js and .expect.js files.

The following steps will get this working for you:
0. Run `npm install -g yo` (you can skip this step if you've already got Yeoman installed)
0. cd to `generators/generator-my-app`
0. Run `npm install` to install the generator's dependencies
0. Once all the dependencies have installed successfully run `npm link` to make the generator accessible to Yeoman.

To run the generator cd to the top-level of the repo (i.e. `declarative/`) and run `yo my-app:display`

Follow the prompts to create the component as you desire.

### Rule of Silence

> Developers should design programs so that they do not print unnecessary output. This rule aims to allow other programs and developers to pick out the information they need from a program's output without having to parse verbosity.

<cite>Eric S. Raymond, [*The Art of Unix Programming*](https://en.wikipedia.org/wiki/The_Art_of_Unix_Programming)</cite>

Note:

The amount of output will vary depending on the purpose of your script; a major platform migration might call for very detailed output, while a maintenance script may only need to print something if there was an error.

Know your audience, and only print the bare minimum by default. Use options like --verbose for when users need more.

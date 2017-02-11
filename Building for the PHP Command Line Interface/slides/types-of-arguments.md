### Types of input

[Positional] Arguments<!-- .element: class="fragment" data-fragment-index="0" -->

```
$ my-command foo bar
```
<!-- .element: class="fragment" data-fragment-index="0" -->

Options ("associative args")<!-- .element: class="fragment" data-fragment-index="1" -->

```
$ my-command -n=100 --type foo --verbose
```
<!-- .element: class="fragment" data-fragment-index="1" -->

Note:

Important to establish common language before we go further around accepting input:

Args (or "positional args") are passed in a specific order to the command

Options (sometimes called "associate args", but that's not really correct) have one or two dashes before them and either act as key:value pairs or as flags (such as --verbose)

Single dash/letter is a convention.
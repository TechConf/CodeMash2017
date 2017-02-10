### `getopt()`

```php
var_dump(getopt(
	'a:b',
	array('foo:', 'verbose')
));
```

```bash
$ myscript -a=hello -b --foo=bar --verbose

array(4) {
  'a' =>
  string(5) "hello"
  'b' =>
  bool(false)
  'foo' =>
  string(3) "bar"
  'verbose' =>
  bool(false)
}
```
<!-- .element: class="fragment" -->

Note:

PHP also has the getopt() function for retrieving options passed via the CLI, though I'll admit it's not the prettiest syntax.
### Using `$argc` and `$argv`

```php
# ArgExample.php
printf('There were %d arguments passed to PHP:' . PHP_EOL, $argc);
print_r($argv);
```

```sh
$ php ArgExample.php abc 123
```
<!-- .element: class="fragment" -->

```sh
There were 3 arguments passed to PHP:
Array
(
  [0] => ArgExample.php
  [1] => abc
  [2] => 123
)
```
<!-- .element: class="fragment" -->
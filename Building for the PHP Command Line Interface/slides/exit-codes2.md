### Exit codes

```php
if (! isset($argv['1'])) {
	echo "Missing required argument!";
	exit(1);
}

// Do something awesome
```

```sh
$ php my-script.php foo && echo "Success"
$ php my-script.php && echo "You will never see this"
```
<!-- .element: class="fragment" -->
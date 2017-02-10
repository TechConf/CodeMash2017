### Know the current Server API

Scripts can use `php_sapi_name()` (or the `PHP_SAPI` constant) to determine the Server API being used.

```php
// Make sure this script is being run over the PHP CLI!
if ('cli' !== php_sapi_name()) {
	return;
}
```

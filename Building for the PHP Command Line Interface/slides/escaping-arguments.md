#### `escapeshellarg()`

```php
$name = 'steve && rm -rf /';

# Oh no, $name isn't being escaped!
exec('greet-user ' . $name);
```

```php
> Hello, steve # proceeded by your system being destroyed
```
<!-- .element: class="fragment" -->

<br>
```php
$name = 'steve && rm -rf /';

# Nice try, user!
exec('greet-user ' . escapeshellarg($name));
```
<!-- .element: class="fragment" -->

```php
> Hello, steve && rm -rf / # What an odd name!
```
<!-- .element: class="fragment" -->
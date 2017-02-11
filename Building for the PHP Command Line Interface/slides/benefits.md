###  Benefits

* <!-- .element: class="fragment" -->No reliance on the browser
	* Publicly-discoverable interfaces
	* Timeouts
* <!-- .element: class="fragment" -->Script using the same libraries as your application
* <!-- .element: class="fragment" -->PHP developers don't *have* to learn Bash
```php
#!/usr/bin/env php
<?php
	// Do stuff
```

Note:

Writing CLI scripts can be great for security, as you're not inadvertently exposing APIs

Out of the box, most web servers will give up after 30 seconds. The PHP CLI can run indefinitely.
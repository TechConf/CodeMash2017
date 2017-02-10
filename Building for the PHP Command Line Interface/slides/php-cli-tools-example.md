### PHP-CLI Tools

```php
#!/usr/bin/env php
<?php

// Require dependencies.
require_once __DIR__ . '/../vendor/autoload.php';

$limit  = cli\prompt('How high should I count?', 10);
$loud   = cli\choose('Shall I shout it');
$suffix = 'y' === $loud ? '!' : '.';

for ($i = 1; $i <= $limit; $i++) {
	cli\line($i . $suffix);
}
```

Note:

Here's another sample program, this time using the PHP CLI Tools library maintained by the WP-CLI team.

Ask how high we should count (with a default of 10) and get a yes/no prompt for volume.

Then we run a simple for-loop until we reach the limit the user provided.
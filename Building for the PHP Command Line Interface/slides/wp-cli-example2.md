### WP-CLI: Command Definition

```php
/**
 * Display the latest posts from a given user.
 *
 * ## OPTIONS
 *
 * <login>
 * : The user login to collect stats for.
 *
 * @subcommand latest-posts-by-user
 */
public function latest_posts_by_user( $args, $assoc_args ) {
	// Do something!
}
```

Note:

Each command is given a DocBlock, which defines the available arguments, provides examples, and lets us use some other DocBlock tags like @subcommand.
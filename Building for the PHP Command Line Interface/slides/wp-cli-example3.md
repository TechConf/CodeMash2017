### WP-CLI: Command Method

```php
public function latest_posts_by_user( $args, $assoc_args ) {
	$user = get_user_by( 'login', $args['0'] );
	if ( ! $user ) {
		return WP_CLI::error(
			'The specified user login does not exist!'
		);
	}

	$posts  = get_posts( array( 'author' => $user->ID ) );
	$fields = array( 'ID', 'post_title', 'post_date' );

	return WP_CLI\Utils\format_items( 'table', $posts, $fields );
}
```

Note:

Inside the function, we have two arguments: $args and $assoc_args

$args contains the positional arguments.

$assoc_args contains the associative arguments.

WP-CLI also has some nice formatters, like format_items(), which will let us generate an ASCII table.
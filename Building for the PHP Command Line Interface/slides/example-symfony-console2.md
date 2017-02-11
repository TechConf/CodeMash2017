### Symfony Console

```php
/**
 * Define what the command should be called and what arguments it
 * should accept.
 */
protected function configure()
{
	$this
		->setName('symfony-example')
		->setDescription('Greet a user by name.')
		->addArgument(
			'name',
			InputArgument::REQUIRED,
			'The name of the user'
		);
}
```

Note:

The configure method defines what our command looks like:

Its name, description, and arguments are defined here.
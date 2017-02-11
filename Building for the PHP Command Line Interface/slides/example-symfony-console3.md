### Symfony Console

```php
/**
 * Execute the command.
 *
 * @param InputInterface  $input  The input interface.
 * @param OutputInterface $output The output interface.
 */
protected function execute($input, $output)
{
	$output->writeln(sprintf(
		'<comment>Symfony says "hello", %s!</comment>',
		$input->getArgument('name')
	));
}
```

Note:

The execute() method defines what happens when someone runs the command.

We receive two interfaces, one for input and one for output, which give us ways to handle data.

In this case, we're printing a line that will get colored by the console that greets the user.
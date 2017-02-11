###  Symfony Console

```php
<?php
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class SymfonyExample extends Command
{
	// ...
```

Note:

To create a new Symfony console command, we're going to extend the Command class and define at least two methods: configure() and execute()
### WP-CLI: In Action

```sh
$ wp example-command latest-posts-by-user admin
```

```
+-----+---------------+---------------------+
| ID  | post_title    | post_date           |
+-----+---------------+---------------------+
| 7   | A third post  | 2016-04-08 14:32:00 |
| 5   | Another post  | 2016-04-05 18:32:23 |
| 1   | Hello World!  | 2015-11-12 01:14:38 |
+-----+---------------+---------------------+
```
<!-- .element: class="fragment" -->

Note:

When you're working on the CLI, it's really great to be able to see data like this.

What's even nicer is that if we pipe this to something else or save it down to a file, it automatically treats the data as a CSV. This is just a great example of composability.
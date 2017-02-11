### Garbage Collection

* Unset objects when they're no longer necessary <!-- .element: class="fragment" -->
* Be judicious with caching <!-- .element: class="fragment" -->
* Watch the size of arrays that are constantly growing <!-- .element: class="fragment" -->

Note:

The garbage collector frees up memory that was previously allocated but no longer needed.

Not something PHP developers normally have to worry about, because it gets cleaned up for us automatically at the end of each request.

You can help the garbage collector by explicitly saying "I'm done with this" by using unset().

Try to cache values in variables whenever possible, but be careful about how big those caches get; if you're running something in a big loop, consider null-ing out that variable after a certain number of iterations.
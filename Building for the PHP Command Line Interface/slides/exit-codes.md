### Exit codes

* The *way* we exit scripts is significant:
	* `0` = successful
	* `1` = error
* Additional values between 2-255 have special meanings in *nix <!-- .element: class="fragment" -->
* If no exit status is provided, scripts will exit with the status of the last command run <!-- .element: class="fragment" -->
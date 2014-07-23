jquery-touch-fix
==========

Ensure event.touches are monitored by jQuery touch listeners.

## Basic Usage
Touch-fix can be used as a requirejs module or standard script include.  

If used with requirejs, touch-fix will return the required instance of jquery that has been augmented for convenience.

```
    var jqueryWithTouch = require("jquery-touch-fix/jquery-touch-fix");

    or

    <script src="jquery-touch-fix/jquery-touch-fix.js" /></script>

```
# runtime-stopwatch
This is a simple module to check the current runtime of your code.
## Usage
```
var watch = require('./index.js')

watch.start();

/* My long function */

console.log("milliseconds: " + watch.elapsed("ms"));
console.log("seconds: " + watch.elapsed("s"));
console.log("minutes: " + watch.elapsed("m"));
console.log("hours: " + watch.elapsed("h"));

watch.stop()
watch.reset()

```

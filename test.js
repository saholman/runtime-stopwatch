var watch = require('./index.js')

watch.start();
myfunct(function(err) {
    watch.stop();
})

function myfunct(callback) {
    wait(2000)
    // watch.stop() // You can also place the stop before checking elapsed time.
    console.log("milliseconds: " + watch.elapsed("ms"));
    console.log("seconds: " + watch.elapsed("s"));
    console.log("minutes: " + watch.elapsed("m"));
    console.log("hours: " + watch.elapsed("h"));
    callback()
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

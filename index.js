var start_date;
var stop_date;
module.exports = {
    start: function() {
        stop_date = null;
        start_date = new Date()
    },
    stop: function() {
        stop_date = new Date()
    },
    reset: function() {
        stop_date = null;
        start_date = null;
    },
    elapsed: function(unit) {
        let now = new Date()
        if(stop_date) {
            var diff = Math.abs(stop_date - start_date);
            // console.log(diff)
        } else {
            var diff = Math.abs(now - start_date);
            // console.log(diff)
        }
        switch(unit) {
            case "ms":
                return diff;
                break;
            case "s":
                return diff / 1000;
                break;
            case "m":
                return diff / 60000;
                break;
            case "h":
                return diff / 3600000;
                break;
            default:
                throw("Unknown unit. Options are \"ms\", \"s\", \"m\", and \"h\"")
                break;
        }
    }
}

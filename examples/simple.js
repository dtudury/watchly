var watchly = require('../index');

var w = new watchly.Watcher();
console.log(w.prototype);

function log(a) {
    console.log("triggered with " + a);
}

w.on(1, log);
w.set(1, 5);
console.log("w[1] has value:", w.get(1));

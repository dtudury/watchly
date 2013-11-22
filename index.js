function Watcher(obj) {


    var self = this;
    obj = obj || {};


    function set(id, val) {
        obj[id] = val;
        self.dispatch(id, val);
    }


    function get(id) {
        return obj[id];
    }


    self.set = set;
    self.get = get;


}


Watcher.prototype = new (require('evently').Dispatcher)();


exports.Watcher = Watcher;
exports.static = new Watcher();
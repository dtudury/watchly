exports.Watcher = function (obj) {


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


};


exports.Watcher.prototype = new (require('evently').dispatcher)();
exports.watcher = exports.Watcher;

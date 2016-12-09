"use strict";
require("reflect-metadata");
var Log;
(function (Log) {
    function type(target, key) {
        var type = Reflect.getMetadata("design:type", target, key);
        console.log(key + " type: " + type.name);
    }
    Log.type = type;
    function paramtypes(target, key) {
        var types = Reflect.getMetadata("design:paramtypes", target, key);
        var s = types.map(function (a) { return a.name; }).join();
        console.log(key + " param types: " + s);
    }
    Log.paramtypes = paramtypes;
    function properties(target) {
        console.log(target);
        var properties = Reflect.getMetadata("design:properties", target);
        console.log(properties);
        // console.log(`${key} return type: ${return_type.name}`);
    }
    Log.properties = properties;
})(Log = exports.Log || (exports.Log = {}));
//# sourceMappingURL=log.js.map
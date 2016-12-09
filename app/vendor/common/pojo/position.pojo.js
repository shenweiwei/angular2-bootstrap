"use strict";
var PositionPojo = (function () {
    function PositionPojo() {
    }
    Object.defineProperty(PositionPojo.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PositionPojo.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    return PositionPojo;
}());
exports.PositionPojo = PositionPojo;
//# sourceMappingURL=position.pojo.js.map
"use strict";
var ComponentException = (function () {
    function ComponentException(_message) {
        this.name = 'ComponentException';
        this.message = _message;
    }
    ComponentException.prototype.getMessage = function () {
        return this.name + ':' + this.message;
    };
    return ComponentException;
}());
exports.ComponentException = ComponentException;
//# sourceMappingURL=component.exception.js.map
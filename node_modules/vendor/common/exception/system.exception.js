"use strict";
var SystemException = (function () {
    function SystemException(_message) {
        this.name = 'SystemException';
        this.message = _message;
    }
    SystemException.prototype.getMessage = function () {
        return this.name + ':' + this.message;
    };
    return SystemException;
}());
exports.SystemException = SystemException;
//# sourceMappingURL=system.exception.js.map
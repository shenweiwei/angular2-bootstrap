"use strict";
var ServiceAppException = (function () {
    function ServiceAppException(_message) {
        this.name = 'ServiceAppException';
        this.message = _message;
    }
    ServiceAppException.prototype.getMessage = function () {
        return this.name + ':' + this.message;
    };
    return ServiceAppException;
}());
exports.ServiceAppException = ServiceAppException;
//# sourceMappingURL=service_app_exception.js.map
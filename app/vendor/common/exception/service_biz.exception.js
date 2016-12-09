"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var service_app_exception_1 = require('./service_app.exception');
var ServiceBizException = (function (_super) {
    __extends(ServiceBizException, _super);
    function ServiceBizException(_message) {
        _super.call(this, _message);
        this.name = 'ServiceBizException';
        this.message = _message;
    }
    ServiceBizException.prototype.getMessage = function () {
        return this.name + ':' + this.message;
    };
    return ServiceBizException;
}(service_app_exception_1.ServiceAppException));
exports.ServiceBizException = ServiceBizException;
//# sourceMappingURL=service_biz.exception.js.map
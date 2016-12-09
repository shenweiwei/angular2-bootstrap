"use strict";
var http_1 = require('@angular/http');
var HttpHeader = (function () {
    function HttpHeader() {
        this._headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    HttpHeader.prototype.setContentType = function (httpContentType) {
        this._headers.set('Content-Type', httpContentType);
    };
    Object.defineProperty(HttpHeader.prototype, "headers", {
        get: function () {
            return this._headers;
        },
        set: function (headers) {
            this._headers = headers;
        },
        enumerable: true,
        configurable: true
    });
    return HttpHeader;
}());
exports.HttpHeader = HttpHeader;
//# sourceMappingURL=http_header.js.map
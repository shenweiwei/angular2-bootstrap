"use strict";
var HttpConstants;
(function (HttpConstants) {
    var HttpMethod = (function () {
        function HttpMethod() {
        }
        HttpMethod.GET = 'GET';
        HttpMethod.POST = 'POST';
        HttpMethod.PUT = 'PUT';
        HttpMethod.DELETE = 'DELETE';
        return HttpMethod;
    }());
    HttpConstants.HttpMethod = HttpMethod;
    var HttpContentType = (function () {
        function HttpContentType() {
        }
        HttpContentType.JSON = 'application/json';
        return HttpContentType;
    }());
    HttpConstants.HttpContentType = HttpContentType;
})(HttpConstants = exports.HttpConstants || (exports.HttpConstants = {}));
//# sourceMappingURL=http_constants.js.map
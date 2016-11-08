"use strict";
var StringUtil = (function () {
    function StringUtil() {
    }
    StringUtil.isEmpty = function (data) {
        if (!(data === undefined || data === null || data === '')) {
            return false;
        }
        return true;
    };
    StringUtil.isNull = function (data) {
        if (!(data === undefined || data === null)) {
            return false;
        }
        return true;
    };
    StringUtil.toUpperCase = function (data) {
        if (this.isEmpty(data)) {
            return;
        }
        return data.toUpperCase();
    };
    StringUtil.toLowerCase = function (data) {
        if (this.isEmpty(data)) {
            return;
        }
        return data.toLowerCase();
    };
    return StringUtil;
}());
exports.StringUtil = StringUtil;
//# sourceMappingURL=string.util.js.map
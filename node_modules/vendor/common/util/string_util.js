"use strict";
var StringUtil = (function () {
    function StringUtil() {
    }
    StringUtil.empty = function (data) {
        if (!(data === undefined || data === null || data === '')) {
            return false;
        }
        return true;
    };
    ;
    return StringUtil;
}());
exports.StringUtil = StringUtil;
//# sourceMappingURL=string_util.js.map
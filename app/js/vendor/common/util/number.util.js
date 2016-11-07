"use strict";
var NumberUtil = (function () {
    function NumberUtil() {
    }
    NumberUtil.isNullOrZone = function (value) {
        if (!(value === undefined || value === null || value === 0)) {
            return false;
        }
        return true;
    };
    return NumberUtil;
}());
exports.NumberUtil = NumberUtil;
//# sourceMappingURL=number.util.js.map
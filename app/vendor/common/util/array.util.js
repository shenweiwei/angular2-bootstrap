"use strict";
var ArrayUtil = (function () {
    function ArrayUtil() {
    }
    ArrayUtil.isEmpty = function (array) {
        if (!(array === undefined || array === null)) {
            return false;
        }
        else if (array.length > 0) {
            return false;
        }
        return true;
    };
    ArrayUtil.getSize = function (array) {
        if (this.isEmpty(array)) {
            return 0;
        }
        return array.length;
    };
    return ArrayUtil;
}());
exports.ArrayUtil = ArrayUtil;
//# sourceMappingURL=array.util.js.map
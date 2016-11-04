"use strict";
var BeanUtil = (function () {
    function BeanUtil() {
    }
    BeanUtil.clone = function (source) {
        var originProto = Object.getPrototypeOf(source);
        return Object.assign(Object.create(originProto), source);
    };
    return BeanUtil;
}());
exports.BeanUtil = BeanUtil;
//# sourceMappingURL=bean.util.js.map
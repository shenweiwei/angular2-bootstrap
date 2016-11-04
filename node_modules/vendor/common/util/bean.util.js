"use strict";
var BeanUtil = (function () {
    function BeanUtil() {
    }
    BeanUtil.clone = function (source, target) {
        var originProto = Object.getPrototypeOf(source);
        target = Object.assign(Object.create(originProto), source);
        return target;
    };
    return BeanUtil;
}());
exports.BeanUtil = BeanUtil;
//# sourceMappingURL=bean.util.js.map
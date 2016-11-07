"use strict";
var collection_1 = require('../../util/collection');
var BeanUtil = (function () {
    function BeanUtil() {
    }
    BeanUtil.clone = function (source, target) {
        var originProto = Object.getPrototypeOf(source);
        var newTarget = Object.assign(Object.create(originProto), source);
        //如果是List集合
        if (target instanceof collection_1.ArrayList && source instanceof collection_1.ArrayList) {
            target.addAll(source.toArray());
        }
        return newTarget;
    };
    return BeanUtil;
}());
exports.BeanUtil = BeanUtil;
//# sourceMappingURL=bean.util.js.map
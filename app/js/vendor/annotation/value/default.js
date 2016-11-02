"use strict";
var value;
(function (value_1) {
    /**
     * 初始化默认值
     *
     * @export
     * @template T
     * @param {T} value
     * @returns
     */
    function Default(value) {
        return function (target, key) {
            target[key] = value;
        };
    }
    value_1.Default = Default;
})(value = exports.value || (exports.value = {}));
//# sourceMappingURL=default.js.map
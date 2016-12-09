"use strict";
var BaseVo = (function () {
    function BaseVo() {
    }
    Object.defineProperty(BaseVo.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseVo.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_name) {
            this._name = _name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseVo.prototype, "remark", {
        get: function () {
            return this._remark;
        },
        set: function (remark) {
            this._remark = remark;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseVo.prototype, "valid", {
        get: function () {
            return this._valid;
        },
        set: function (valid) {
            this._valid = valid;
        },
        enumerable: true,
        configurable: true
    });
    return BaseVo;
}());
exports.BaseVo = BaseVo;
//# sourceMappingURL=base_vo.js.map
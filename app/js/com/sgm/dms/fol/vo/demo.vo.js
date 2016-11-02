"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var lang_1 = require('vendor/lang');
var DemoVo = (function (_super) {
    __extends(DemoVo, _super);
    function DemoVo() {
        _super.call(this, 0, 10);
    }
    Object.defineProperty(DemoVo.prototype, "sapCode", {
        get: function () {
            return this._sapCode;
        },
        set: function (sapCode) {
            this._sapCode = sapCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DemoVo.prototype, "dealerName", {
        get: function () {
            return this._dealerName;
        },
        set: function (dealerName) {
            this._dealerName = dealerName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DemoVo.prototype, "dealerTypeName", {
        get: function () {
            return this._dealerTypeName;
        },
        set: function (dealerTypeName) {
            this._dealerTypeName = dealerTypeName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DemoVo.prototype, "reserveTypeName", {
        get: function () {
            return this._reserveTypeName;
        },
        set: function (reserveTypeName) {
            this._reserveTypeName = reserveTypeName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DemoVo.prototype, "totalAmount", {
        get: function () {
            return this._totalAmount;
        },
        set: function (totalAmount) {
            this._totalAmount = totalAmount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DemoVo.prototype, "frozenAmount", {
        get: function () {
            return this._frozenAmount;
        },
        set: function (frozenAmount) {
            this._frozenAmount = frozenAmount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DemoVo.prototype, "availAmount", {
        get: function () {
            return this._availAmount;
        },
        set: function (availAmount) {
            this._availAmount = availAmount;
        },
        enumerable: true,
        configurable: true
    });
    return DemoVo;
}(lang_1.PageVo));
exports.DemoVo = DemoVo;
//# sourceMappingURL=demo.vo.js.map
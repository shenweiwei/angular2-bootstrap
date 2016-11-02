"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var lang_1 = require('vendor/lang');
var ApplicationVo = (function (_super) {
    __extends(ApplicationVo, _super);
    function ApplicationVo() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(ApplicationVo.prototype, "appId", {
        get: function () {
            return this._appId;
        },
        set: function (value) {
            this._appId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationVo.prototype, "appChnName", {
        get: function () {
            return this._appChnName;
        },
        set: function (value) {
            this._appChnName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationVo.prototype, "appEngName", {
        get: function () {
            return this._appEngName;
        },
        set: function (value) {
            this._appEngName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationVo.prototype, "appOwner", {
        get: function () {
            return this._appOwner;
        },
        set: function (value) {
            this._appOwner = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationVo.prototype, "appStatus", {
        get: function () {
            return this._appStatus;
        },
        set: function (value) {
            this._appStatus = value;
        },
        enumerable: true,
        configurable: true
    });
    return ApplicationVo;
}(lang_1.PageVo));
exports.ApplicationVo = ApplicationVo;
//# sourceMappingURL=application.vo.js.map
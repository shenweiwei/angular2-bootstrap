"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var annotation_1 = require('vendor/annotation');
var common_1 = require('vendor/common');
var AppOptions = (function () {
    function AppOptions() {
    }
    Object.defineProperty(AppOptions.prototype, "isOpenLock", {
        get: function () {
            return this._isOpenLock;
        },
        set: function (value) {
            this._isOpenLock = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppOptions.prototype, "isLocked", {
        get: function () {
            return this._isLocked;
        },
        set: function (value) {
            this._isLocked = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppOptions.prototype, "clipChevron", {
        get: function () {
            return this._clipChevron;
        },
        set: function (value) {
            this._clipChevron = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppOptions.prototype, "openSelectPosition", {
        get: function () {
            return this._openSelectPosition;
        },
        set: function (value) {
            this._openSelectPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppOptions.prototype, "advanceStyleState", {
        get: function () {
            return this._advanceStyleState;
        },
        set: function (value) {
            this._advanceStyleState = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppOptions.prototype, "advanceStyleDisplay", {
        get: function () {
            return this._advanceStyleDisplay;
        },
        set: function (value) {
            this._advanceStyleDisplay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppOptions.prototype, "isAlert", {
        get: function () {
            return this._isAlert;
        },
        set: function (value) {
            this._isAlert = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppOptions.prototype, "isConfirm", {
        get: function () {
            return this._isConfirm;
        },
        set: function (value) {
            this._isConfirm = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        annotation_1.value.Default(true), 
        __metadata('design:type', Boolean)
    ], AppOptions.prototype, "_isOpenLock", void 0);
    __decorate([
        annotation_1.value.Default(false), 
        __metadata('design:type', Boolean)
    ], AppOptions.prototype, "_isLocked", void 0);
    __decorate([
        annotation_1.value.Default(common_1.ComponentConstants.CLIP_CHEVRON_LEFT), 
        __metadata('design:type', String)
    ], AppOptions.prototype, "_clipChevron", void 0);
    __decorate([
        annotation_1.value.Default(false), 
        __metadata('design:type', Boolean)
    ], AppOptions.prototype, "_openSelectPosition", void 0);
    __decorate([
        annotation_1.value.Default(common_1.ComponentConstants.STATE_CLOSE), 
        __metadata('design:type', String)
    ], AppOptions.prototype, "_advanceStyleState", void 0);
    __decorate([
        annotation_1.value.Default(common_1.ComponentConstants.DISPLAY_NONE), 
        __metadata('design:type', String)
    ], AppOptions.prototype, "_advanceStyleDisplay", void 0);
    __decorate([
        annotation_1.value.Default(false), 
        __metadata('design:type', Boolean)
    ], AppOptions.prototype, "_isAlert", void 0);
    __decorate([
        annotation_1.value.Default(false), 
        __metadata('design:type', Boolean)
    ], AppOptions.prototype, "_isConfirm", void 0);
    return AppOptions;
}());
exports.AppOptions = AppOptions;
//# sourceMappingURL=app.options.js.map
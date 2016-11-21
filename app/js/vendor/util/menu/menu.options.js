"use strict";
var MenuOptions = (function () {
    function MenuOptions() {
    }
    Object.defineProperty(MenuOptions.prototype, "preActiveItem", {
        get: function () {
            return this._preActiveItem;
        },
        set: function (value) {
            this._preActiveItem = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuOptions.prototype, "currentActiveItem", {
        get: function () {
            return this._currentActiveItem;
        },
        set: function (value) {
            this._currentActiveItem = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuOptions.prototype, "preActiveSubItem", {
        get: function () {
            return this._preActiveSubItem;
        },
        set: function (value) {
            this._preActiveSubItem = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuOptions.prototype, "currentActiveSubItem", {
        get: function () {
            return this._currentActiveSubItem;
        },
        set: function (value) {
            this._currentActiveSubItem = value;
        },
        enumerable: true,
        configurable: true
    });
    return MenuOptions;
}());
exports.MenuOptions = MenuOptions;
//# sourceMappingURL=menu.options.js.map
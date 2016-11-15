"use strict";
var SubMenuItem = (function () {
    function SubMenuItem() {
    }
    Object.defineProperty(SubMenuItem.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubMenuItem.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (value) {
            this._index = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubMenuItem.prototype, "isNew", {
        get: function () {
            return this._isNew;
        },
        set: function (value) {
            this._isNew = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubMenuItem.prototype, "routerLink", {
        get: function () {
            return this._routerLink;
        },
        set: function (value) {
            this._routerLink = value;
        },
        enumerable: true,
        configurable: true
    });
    return SubMenuItem;
}());
exports.SubMenuItem = SubMenuItem;
//# sourceMappingURL=submenu.item.js.map
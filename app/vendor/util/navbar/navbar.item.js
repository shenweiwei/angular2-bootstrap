"use strict";
var NavBarItem = (function () {
    function NavBarItem() {
    }
    Object.defineProperty(NavBarItem.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (value) {
            this._index = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavBarItem.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (value) {
            this._active = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavBarItem.prototype, "routerLink", {
        get: function () {
            return this._routerLink;
        },
        set: function (value) {
            this._routerLink = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavBarItem.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return NavBarItem;
}());
exports.NavBarItem = NavBarItem;
//# sourceMappingURL=navbar.item.js.map
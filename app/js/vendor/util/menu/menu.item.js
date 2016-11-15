"use strict";
var arraylist_1 = require('../../util/collection/arraylist');
var MenuItem = (function () {
    function MenuItem() {
        this._subItem = new arraylist_1.ArrayList();
    }
    Object.defineProperty(MenuItem.prototype, "subItem", {
        get: function () {
            return this._subItem;
        },
        set: function (value) {
            this._subItem = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuItem.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (value) {
            this._active = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuItem.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (value) {
            this._index = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuItem.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuItem.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
        },
        enumerable: true,
        configurable: true
    });
    return MenuItem;
}());
exports.MenuItem = MenuItem;
//# sourceMappingURL=menu.item.js.map
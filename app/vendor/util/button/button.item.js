"use strict";
var ButtonItem = (function () {
    function ButtonItem() {
    }
    Object.defineProperty(ButtonItem.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonItem.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonItem.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonItem.prototype, "class", {
        get: function () {
            return this._class;
        },
        set: function (value) {
            this._class = value;
        },
        enumerable: true,
        configurable: true
    });
    return ButtonItem;
}());
exports.ButtonItem = ButtonItem;
//# sourceMappingURL=button.item.js.map
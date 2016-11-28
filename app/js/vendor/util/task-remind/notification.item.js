"use strict";
var NotificationItem = (function () {
    function NotificationItem() {
    }
    Object.defineProperty(NotificationItem.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (value) {
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationItem.prototype, "desc", {
        get: function () {
            return this._desc;
        },
        set: function (value) {
            this._desc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationItem.prototype, "operateLevel", {
        get: function () {
            return this._operateLevel;
        },
        set: function (value) {
            this._operateLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationItem.prototype, "operateTime", {
        get: function () {
            return this._operateTime;
        },
        set: function (value) {
            this._operateTime = value;
        },
        enumerable: true,
        configurable: true
    });
    return NotificationItem;
}());
exports.NotificationItem = NotificationItem;
//# sourceMappingURL=notification.item.js.map
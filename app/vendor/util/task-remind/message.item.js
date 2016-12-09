"use strict";
var MessageItem = (function () {
    function MessageItem() {
    }
    Object.defineProperty(MessageItem.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            this._message = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessageItem.prototype, "messageTime", {
        get: function () {
            return this._messageTime;
        },
        set: function (value) {
            this._messageTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessageItem.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessageItem.prototype, "userPicUrl", {
        get: function () {
            return this._userPicUrl;
        },
        set: function (value) {
            this._userPicUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    return MessageItem;
}());
exports.MessageItem = MessageItem;
//# sourceMappingURL=message.item.js.map
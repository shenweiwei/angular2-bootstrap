"use strict";
var UserPojo = (function () {
    function UserPojo() {
    }
    Object.defineProperty(UserPojo.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPojo.prototype, "ssoAccount", {
        get: function () {
            return this._ssoAccount;
        },
        set: function (value) {
            this._ssoAccount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPojo.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPojo.prototype, "positionList", {
        get: function () {
            return this._positionList;
        },
        set: function (value) {
            this._positionList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPojo.prototype, "currentPosition", {
        get: function () {
            return this._currentPosition;
        },
        set: function (value) {
            this._currentPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    return UserPojo;
}());
exports.UserPojo = UserPojo;
//# sourceMappingURL=user.pojo.js.map
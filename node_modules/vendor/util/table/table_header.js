"use strict";
var TableHeader = (function () {
    function TableHeader() {
    }
    Object.defineProperty(TableHeader.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (value) {
            this._index = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableHeader.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableHeader.prototype, "desc", {
        get: function () {
            return this._desc;
        },
        set: function (value) {
            this._desc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableHeader.prototype, "sort", {
        get: function () {
            return this._sort;
        },
        set: function (value) {
            this._sort = value;
        },
        enumerable: true,
        configurable: true
    });
    return TableHeader;
}());
exports.TableHeader = TableHeader;
//# sourceMappingURL=table_header.js.map
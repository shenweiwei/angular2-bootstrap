"use strict";
var TableOptions = (function () {
    function TableOptions() {
    }
    Object.defineProperty(TableOptions.prototype, "pageNumberList", {
        get: function () {
            return this._pageNumberList;
        },
        set: function (value) {
            this._pageNumberList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableOptions.prototype, "beginPageIndex", {
        get: function () {
            return this._beginPageIndex;
        },
        set: function (value) {
            this._beginPageIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableOptions.prototype, "endPageIndex", {
        get: function () {
            return this._endPageIndex;
        },
        set: function (value) {
            this._endPageIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableOptions.prototype, "currentPageSize", {
        get: function () {
            return this._currentPageSize;
        },
        set: function (value) {
            this._currentPageSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableOptions.prototype, "currentPageNumber", {
        get: function () {
            return this._currentPageNumber;
        },
        set: function (value) {
            this._currentPageNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableOptions.prototype, "countDataSize", {
        get: function () {
            return this._countDataSize;
        },
        set: function (value) {
            this._countDataSize = value;
        },
        enumerable: true,
        configurable: true
    });
    TableOptions.prototype.getPageNumberLength = function () {
        return this._pageNumberList.getSize();
    };
    return TableOptions;
}());
exports.TableOptions = TableOptions;
//# sourceMappingURL=table_options.js.map
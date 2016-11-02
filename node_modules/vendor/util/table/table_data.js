"use strict";
var TableData = (function () {
    function TableData() {
    }
    Object.defineProperty(TableData.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (value) {
            this._index = value;
        },
        enumerable: true,
        configurable: true
    });
    return TableData;
}());
exports.TableData = TableData;
//# sourceMappingURL=table_data.js.map
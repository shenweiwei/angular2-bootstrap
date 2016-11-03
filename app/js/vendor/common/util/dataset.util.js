"use strict";
var DataSetUtil = (function () {
    function DataSetUtil() {
    }
    DataSetUtil.getDataForKey = function (target, key) {
        return target['dataset'][key];
    };
    return DataSetUtil;
}());
exports.DataSetUtil = DataSetUtil;
//# sourceMappingURL=dataset.util.js.map
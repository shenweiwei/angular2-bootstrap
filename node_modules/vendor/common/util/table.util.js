"use strict";
var collection_1 = require('../../util/collection');
var table_1 = require('../../util/table');
var bean_util_1 = require('./bean.util');
var TableUtil = (function () {
    function TableUtil() {
    }
    TableUtil.setTableHeaders = function (columnsEnName, columnsCnName) {
        var tableHeaders = new collection_1.ArrayList();
        for (var i = 1; i <= columnsEnName.length; i++) {
            var tableHeader = new table_1.TableHeader();
            tableHeader.index = i;
            tableHeader.key = columnsEnName[i];
            tableHeader.desc = columnsCnName[i];
            tableHeaders.add(tableHeader);
        }
        return tableHeaders;
    };
    TableUtil.setTableDatas = function (datas) {
        var tableDatas = new collection_1.ArrayList();
        for (var i = 1; i <= datas.length; i++) {
            var tableData = bean_util_1.BeanUtil.clone(datas[i - 1]);
            tableDatas.add(tableData);
        }
        return tableDatas;
    };
    return TableUtil;
}());
exports.TableUtil = TableUtil;
//# sourceMappingURL=table.util.js.map
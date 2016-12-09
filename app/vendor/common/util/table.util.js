"use strict";
var table_header_1 = require('../../util/table/table_header');
var collection_1 = require('../../util/collection');
var util_1 = require('../util');
var TableUtil = (function () {
    function TableUtil() {
    }
    TableUtil.setTableHeaders = function (columnsEnName, columnsCnName) {
        var tableHeaders = new collection_1.ArrayList();
        for (var i = 0; i < columnsEnName.length; i++) {
            var header = new table_header_1.TableHeader();
            header.index = i + 1;
            header.key = columnsEnName[i];
            header.desc = columnsCnName[i];
            tableHeaders.add(header);
        }
        return tableHeaders;
    };
    TableUtil.setTableDatas = function (datas) {
        var tableDatas = new collection_1.ArrayList();
        for (var i = 0; i < datas.length; i++) {
            var tableData = util_1.BeanUtil.clone(datas[i]);
            tableDatas.add(tableData);
        }
        return tableDatas;
    };
    return TableUtil;
}());
exports.TableUtil = TableUtil;
//# sourceMappingURL=table.util.js.map
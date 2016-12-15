"use strict";
var common_1 = require('vendor/common');
var CSVFile = (function () {
    function CSVFile() {
    }
    CSVFile.prototype.exportTable = function (fileName, datas, headers) {
        //先转化json  
        var arrData = typeof datas != 'object' ? JSON.parse(datas) : datas;
        //设置表头  
        var csv_file = "";
        for (var i = 0; i < headers.length; i++) {
            if (i === 0) {
                csv_file = csv_file.concat(headers[i].desc);
            }
            else {
                csv_file = csv_file.concat(',').concat(headers[i].desc);
            }
        }
        //换行  
        csv_file = csv_file.concat('\r\n');
        console.log(csv_file);
        //设置数据  
        for (var i = 0; i < arrData.length; i++) {
            var row = '';
            for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
                var header = headers_1[_i];
                if (common_1.StringUtil.isEmpty(arrData[i][header.key])) {
                    row = row.concat(',');
                }
                else {
                    row = row.concat(',').concat(arrData[i][header.key]);
                }
            }
            //截尾
            row = row.substr(0, row.length).concat('\r\n');
            //换行  
            csv_file = csv_file.concat(row);
        }
        console.log(csv_file);
        var uri = 'data:text/csv;charset=utf-8,\uFEFF' + encodeURIComponent(csv_file);
        var link = document.createElement("a");
        link.href = uri;
        $(link).attr('style', 'visibility:hidden');
        link.download = fileName + ".csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    CSVFile.prototype.loadBrowser = function () {
        var explorer = window.navigator.userAgent;
        //ie  
        if (explorer.indexOf("MSIE") >= 0) {
            return common_1.CommonConstants.IE_BROWSER;
        }
        else if (explorer.indexOf("Firefox") >= 0) {
            return common_1.CommonConstants.FIREFOX_BROWSER;
        }
        else if (explorer.indexOf("Chrome") >= 0) {
            return common_1.CommonConstants.CHROME_BROWSER;
        }
        else if (explorer.indexOf("Opera") >= 0) {
            return common_1.CommonConstants.OPEAR_BROWSER;
        }
        else if (explorer.indexOf("Safari") >= 0) {
            return common_1.CommonConstants.SAFIRI_BROWSER;
        }
    };
    return CSVFile;
}());
exports.CSVFile = CSVFile;
//# sourceMappingURL=csv.file.js.map
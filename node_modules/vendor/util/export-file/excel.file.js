"use strict";
var common_1 = require('vendor/common');
var ExcelFile = (function () {
    function ExcelFile() {
    }
    ExcelFile.prototype.exportTable = function (fileName, datas, headers) {
        //先转化json  
        var arrData = typeof datas != 'object' ? JSON.parse(datas) : datas;
        var excel_table = '<table style="border:1px solid #000000;">';
        //设置表头  
        var row = "<thead><tr>";
        for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
            var header = headers_1[_i];
            row += '<th style="border:1px solid #000000;">' + header.desc + '</th>';
        }
        //换行  
        excel_table += row + "</tr></thead>";
        //设置数据  
        excel_table += "<tbody>";
        for (var i = 0; i < arrData.length; i++) {
            var row_1 = "<tr>";
            for (var _a = 0, headers_2 = headers; _a < headers_2.length; _a++) {
                var header = headers_2[_a];
                console.log(arrData[i][header.key]);
                if (common_1.StringUtil.isEmpty(arrData[i][header.key])) {
                    row_1 += '<td style="border:1px solid #000000;"></td>';
                }
                else {
                    row_1 += '<td style="border:1px solid #000000;">' + arrData[i][header.key] + '</td>';
                }
            }
            excel_table += row_1 + "</tr>";
        }
        excel_table += "</tbody></table>";
        var excelFile = this.tableTemplate().replace("$tableTemplate", excel_table);
        var uri = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(excelFile);
        var link = document.createElement("a");
        link.href = uri;
        $(link).attr('style', 'visibility:hidden');
        link.download = fileName + ".xls";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    ExcelFile.prototype.tableTemplate = function () {
        var excelFileTemplate = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>"
            .concat("<head>")
            .concat('<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">')
            .concat("<!--[if gte mso 9]>")
            .concat("<xml>")
            .concat("<x:ExcelWorkbook>")
            .concat("<x:ExcelWorksheets>")
            .concat("<x:ExcelWorksheet>")
            .concat("<x:Name>")
            .concat("{worksheet}")
            .concat("</x:Name>")
            .concat("<x:WorksheetOptions>")
            .concat("<x:DisplayGridlines/>")
            .concat("</x:WorksheetOptions>")
            .concat("</x:ExcelWorksheet>")
            .concat("</x:ExcelWorksheets>")
            .concat("</x:ExcelWorkbook>")
            .concat("</xml>")
            .concat("<![endif]-->")
            .concat("</head>")
            .concat("<body>")
            .concat("")
            .concat("$tableTemplate")
            .concat("")
            .concat("</body>")
            .concat("</html>");
        return excelFileTemplate;
    };
    return ExcelFile;
}());
exports.ExcelFile = ExcelFile;
//# sourceMappingURL=excel.file.js.map
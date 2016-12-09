import { TableHeader } from 'vendor/util';
import { StringUtil } from 'vendor/common';
declare const $: any;
export class ExcelFile {
    exportTable(fileName: string, datas: any[], headers: any[]): void {
        //先转化json  
        let arrData = typeof datas != 'object' ? JSON.parse(datas) : datas;

        let excel_table = '<table style="border:1px solid #000000;">';

        //设置表头  
        let row = "<thead><tr>";

        for (let header of headers) {
            row += "<th>" + header.desc + '</th>';
        }

        //换行  
        excel_table += row + "</tr></thead>";

        //设置数据  
        excel_table += "<tbody>"
        for (let i = 0; i < arrData.length; i++) {
            let row = "<tr>";

            for (let header of headers) {
                console.log(arrData[i][header.key]);
                if (StringUtil.isEmpty(arrData[i][header.key])) {
                    row += '<td style="border:1px solid #000000;"></td>'
                } else {
                    row += '<td style="border:1px solid #000000;">' + arrData[i][header.key] + '</td>';
                }
            }

            excel_table += row + "</tr>";
        }

        excel_table += "</tbody></table>";


        let excelFile = this.tableTemplate().replace("$tableTemplate", excel_table);

        let uri = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(excelFile);

        let link = document.createElement("a");
        link.href = uri;
        $(link).attr('style', 'visibility:hidden')
        link.download = fileName + ".xls";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    tableTemplate(): String {
        let excelFileTemplate = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>"
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
    }
}
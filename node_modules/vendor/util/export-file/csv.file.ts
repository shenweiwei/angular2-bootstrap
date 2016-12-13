import { TableHeader } from 'vendor/util';
import { StringUtil } from 'vendor/common';
declare const $: any;

export class CSVFile {
    exportTable(fileName: string, datas: any[], headers: any[]): void {
        //先转化json  
        let arrData = typeof datas != 'object' ? JSON.parse(datas) : datas;

        //设置表头  
        let csv_file = "";

        for (let i = 0; i < headers.length; i++) {
            if (i === 0) {
                csv_file = csv_file.concat(headers[i].desc)
            } else {
                csv_file = csv_file.concat(',').concat(headers[i].desc)
            }
        }

        //换行  
        csv_file = csv_file.concat('\r\n');
        console.log(csv_file)

        //设置数据  
        for (let i = 0; i < arrData.length; i++) {
            let row = ''
            for (let header of headers) {
                if (StringUtil.isEmpty(arrData[i][header.key])) {
                    row = row.concat(',');
                } else {
                    row = row.concat(',').concat(arrData[i][header.key]);
                }
            }

            //截尾
            row = row.substr(0, row.length).concat('\r\n');
            //换行  
            csv_file = csv_file.concat(row);
        }
        console.log(csv_file)

        let uri = 'data:text/csv;charset=utf-8,\uFEFF' + encodeURIComponent(csv_file);

        let link = document.createElement("a");
        link.href = uri;
        $(link).attr('style', 'visibility:hidden')
        link.download = fileName + ".csv";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

}
import { List, ArrayList } from '../../util/collection';
import { TableHeader, TableData } from '../../util/table';
import { BeanUtil } from './bean.util';

export class TableUtil {
    static setTableHeaders(columnsEnName: Array<string>, columnsCnName: Array<string>): List<TableHeader> {
        let tableHeaders = new ArrayList<TableHeader>();

        for (let i = 1; i <= columnsEnName.length; i++) {
            let tableHeader = new TableHeader();
            tableHeader.index = i;
            tableHeader.key = columnsEnName[i];
            tableHeader.desc = columnsCnName[i];
            tableHeaders.add(tableHeader);
        }

        return tableHeaders;
    }

    static setTableDatas(datas: Array<any>): List<TableData> {
        let tableDatas = new ArrayList<TableData>();

        for (let i = 1; i <= datas.length; i++) {
            let tableData: TableData = BeanUtil.clone(datas[i - 1]);
            tableDatas.add(tableData);
        }

        return tableDatas;
    }
}
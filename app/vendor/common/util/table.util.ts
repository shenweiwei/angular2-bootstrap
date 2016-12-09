import { TableHeader } from '../../util/table/table_header';
import { TableData } from '../../util/table/table_data';
import { List, ArrayList } from '../../util/collection';
import { BeanUtil } from '../util';

export class TableUtil {
    static setTableHeaders(columnsEnName: Array<string>, columnsCnName: Array<string>): List<TableHeader> {
        let tableHeaders = new ArrayList<TableHeader>();
        for (let i = 0; i < columnsEnName.length; i++) {
            let header = new TableHeader();
            header.index = i + 1;
            header.key = columnsEnName[i];
            header.desc = columnsCnName[i];
            tableHeaders.add(header);
        }

        return tableHeaders;
    }

    static setTableDatas(datas: Array<any>): List<TableData> {
        let tableDatas = new ArrayList<TableData>();

        for (let i = 0; i < datas.length; i++) {
            let tableData: TableData = BeanUtil.clone(datas[i]);
            tableDatas.add(tableData);
        }

        return tableDatas;
    }
}
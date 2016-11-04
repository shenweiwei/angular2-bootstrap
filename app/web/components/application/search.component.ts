import { Component, Input, ViewChild } from '@angular/core';
import { BaseComponent } from '../base.component';
import { TableComponent } from '../../vendor/components/table.component';
import { ApplicationVo } from '../../../js/com/sgm/dms/ops/vo/application.vo';
import { TableData, TableHeader, ArrayList, TableOptions, List } from 'vendor/util';

@Component({
    templateUrl: 'app/web/views/application/search.html',
    entryComponents: [TableComponent]
})

export class ApplicationSearchComponent extends BaseComponent{
    public application: ApplicationVo = new ApplicationVo();

    @ViewChild(TableComponent) tableComponent: TableComponent;

    search(): void {
        this.tableComponent.initDataTable(this.getTableHeaders(), this.getTableDatas());
    }

    getTableHeaders(): List<TableHeader> {
        let tableHeaders = new ArrayList<TableHeader>();

        const columnsEnName = ['appId', 'appChnName', 'appEngName', 'appOwner', 'updateDate', 'remark'];
        const columnsCnName = ['应用编号', '应用中文名', '应用英文名', '应用负责人', '更新时间', '备注'];

        for (let i = 0; i < columnsEnName.length; i++) {
            let tableHeader = new TableHeader();
            tableHeader.key = columnsEnName[i];
            tableHeader.desc = columnsCnName[i];
            tableHeaders.add(tableHeader);
        }

        return tableHeaders;
    }

    getTableDatas(): List<TableData> {
        let tableDatas = new ArrayList<TableData>();

        for (let i = 1; i <= 30; i++) {
            let tableData = new TableData();
            tableData['appId'] = i;
            tableData['appChnName'] = i;
            tableData['appEngName'] = i;
            tableDatas.add(tableData);
        }

        return tableDatas;
    }
}
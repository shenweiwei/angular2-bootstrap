import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base.component';
import { TableComponent } from '../../vendor/components/table.component';
import { ApplicationVo } from '../../../js/com/sgm/dms/ops/vo/application.vo';
import { TableData, TableHeader, ArrayList, TableOptions, List } from 'vendor/util';

@Component({
    templateUrl: 'app/web/views/application/search.html',
    entryComponents: [TableComponent]
    // providers: [TableComponent]
})

export class ApplicationSearchComponent extends BaseComponent implements OnInit {
    public application: ApplicationVo = new ApplicationVo();
    public tableHeaders: List<TableHeader>;
    public tableDatas: List<TableData>;
    public tableComponent: TableComponent

    constructor() {
        super();
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.setTableDatas();
        this.setTableHeaders();
    }

    search(): void {
        this.tableComponent = new TableComponent(new TableOptions());
        this.tableComponent.initDataTable(this.tableHeaders, this.tableDatas);
    }

    setTableHeaders(): void {
        this.tableHeaders = new ArrayList<TableHeader>();

        const columnsEnName = ['appId', 'appChnName', 'appEngName', 'appOwner', 'updateDate', 'remark'];
        const columnsCnName = ['应用编号', '应用中文名', '应用英文名', '应用负责人', '更新时间', '备注'];

        for (let i = 0; i < columnsEnName.length; i++) {
            let tableHeader = new TableHeader();
            tableHeader.key = columnsEnName[i];
            tableHeader.desc = columnsCnName[i];
            this.tableHeaders.add(tableHeader);
        }
    }

    setTableDatas(): void {
        this.tableDatas = new ArrayList<TableData>();

        for (let i = 1; i <= 30; i++) {
            let tableData = new TableData();
            tableData['appId'] = i;
            tableData['appChnName'] = i;
            tableData['appEngName'] = i;
            this.tableDatas.add(tableData);
        }
    }
}
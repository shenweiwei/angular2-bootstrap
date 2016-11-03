import { Component, OnInit,Input } from '@angular/core';
import { BaseComponent } from '../base.component';
import { TableComponent } from '../../vendor/components/table.component';
import { ApplicationVo } from '../../../js/com/sgm/dms/ops/vo/application.vo';
import { TableData, TableHeader, ArrayList,TableOptions } from 'vendor/util';

@Component({
    templateUrl: 'app/web/views/application/search.html',
    providers: [TableComponent]
})

export class ApplicationSearchComponent extends BaseComponent implements OnInit {
    public application: ApplicationVo = new ApplicationVo();

    constructor(public tableComponent: TableComponent) {
        super();
    }


    ngOnInit(): void {
        super.ngOnInit();
    }

    search(): void {
        let list = new ArrayList<TableData>();

        for (let i = 1; i <= 30; i++) {
            let tableData = new TableData();
            tableData['appId'] = i;
            tableData['appChnName'] = i;
            tableData['appEngName'] = i;
            list.add(tableData);
        }

        this.tableComponent.initDataTable(list,new ArrayList());
    }
}
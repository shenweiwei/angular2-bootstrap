import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';
import { TableComponent } from '../../vendor/components/table.component';
import { ApplicationVo } from '../../../js/com/sgm/dms/ops/vo/application.vo';
import { TableData,TableHeader } from 'vendor/util'

@Component({
    templateUrl: 'app/web/views/application/search.html',
    providers: [TableComponent]
})

export class ApplicationSearchComponent extends BaseComponent implements OnInit {
    public application: ApplicationVo = new ApplicationVo();


    constructor(private tableComponent: TableComponent) {
        super();
    }


    ngOnInit(): void {
        super.ngOnInit();
    }

    search(): void {
        let tableHeader=new T

        for (let i = 0; i <= 30; i++) {
            let tableData = new TableData();
            tableData
        }
        this.tableComponent.initDataTable();
    }
}
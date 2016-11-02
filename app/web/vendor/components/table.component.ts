import { Component, Input } from '@angular/core';
import { TableOptions } from 'vendor/util';

@Component({
    selector: 'bootstrap-table',
    templateUrl: 'app/web/vendor/views/table.html',
    styleUrls: ['app/web/vendor/css/vendor.css']
})

export class TableComponent {
    /**
     * 设置初始化页面数据总数
     * 
     * @type {number}
     * @memberOf TableComponent
     */
    @Input() pageSize: number;

    constructor(public tableOptions: TableOptions) {
    }

    initDataTable(): void {
        console.log(this.tableOptions);
        console.log(this.tableOptions.pageSizeList.getSize());
    }
}
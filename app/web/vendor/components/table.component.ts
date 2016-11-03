import { Component, Input } from '@angular/core';
import { TableOptions, TableData, TableHeader, List } from 'vendor/util';
import { ComponentConstants } from 'vendor/common';

@Component({
    selector: 'bootstrap-table',
    templateUrl: 'app/web/vendor/views/table.html',
    styleUrls: ['app/web/vendor/css/vendor.css']
})

export class TableComponent {

    private _tableDatas: List<TableData>;

    /**
     * 设置初始化页面数据总数
     * 
     * @type {number}
     * @memberOf TableComponent
     */
    @Input('pageSize') pageSize: number;

    constructor(public tableOptions: TableOptions) {
        console.log(this.tableOptions);
    }

    /**
     * 初始化表格
     * 
     * @param {TableData} tableData
     * @param {TableHeader} tableHeader
     * 
     * @memberOf TableComponent
     */
    initDataTable(tableDatas: List<TableData>): void {
        this._tableDatas = tableDatas;

        //设置页面显示总数
        this.setPageSize(this.pageSize);

        //设置数据集总数
        this.tableOptions.countDataSize = tableDatas.getSize();

        //默认显示第一页
        this.goPage(this.tableOptions.currentPageNumber, ComponentConstants.TABLE_TURN_PAGE_GO);
    }

    /**
     * 跳转到相关页数
     * 
     * @param {number} pageNumber
     * @param {string} action
     * 
     * @memberOf TableComponent
     */
    goPage(pageNumber: number, action: string): void {
        if (action === ComponentConstants.TABLE_TURN_PAGE_GO) {
            this.tableOptions.currentPageNumber = pageNumber;
        } else if (action === ComponentConstants.TABLE_TURN_PAGE_NEXT) {
            this.tableOptions.currentPageNumber++;
        } else if (action === ComponentConstants.TABLE_TURN_PAGE_PREVIOUS) {
            this.tableOptions.currentPageNumber--;
        }

        this.setViewData();
    }


    /**
     * 填充表格数据
     * 
     * @memberOf TableComponent
     */
    setViewData(): void {

    }

    /**
     * 设置的默认页面显示数据总数
     * 
     * @param {number} pageSize
     * 
     * @memberOf TableComponent
     */
    setPageSize(pageSize: number): void {
        this.tableOptions.currentPageSize = pageSize;
        if (this.tableOptions.currentPageNumber <= 1) {
            this.tableOptions.beginPageIndex = 1
            this.tableOptions.endPageIndex = this.pageSize;
        } else {
            this.tableOptions.beginPageIndex = this.tableOptions.currentPageSize * (this.tableOptions.currentPageNumber - 1) + 1
            this.tableOptions.endPageIndex = this.tableOptions.currentPageSize * this.tableOptions.currentPageNumber;
        }

    }


    public get tableDatas(): List<TableData> {
        return this._tableDatas;
    }

    public set tableDatas(value: List<TableData>) {
        this._tableDatas = value;
    }
}
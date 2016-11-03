import { Component, Input } from '@angular/core';
import { TableOptions, TableData, TableHeader, ArrayList } from 'vendor/util';
import { ComponentConstants } from 'vendor/common';

@Component({
    selector: 'bootstrap-table',
    templateUrl: 'app/web/vendor/views/table.html',
    styleUrls: ['app/web/vendor/css/vendor.css']
})

export class TableComponent {

    private _tableDataList: ArrayList<TableData>;
    private _tableHeader: TableHeader;

    /**
     * 设置初始化页面数据总数
     * 
     * @type {number}
     * @memberOf TableComponent
     */
    @Input() pageSize: number;

    constructor(public tableOptions: TableOptions) { }

    /**
     * 初始化表格
     * 
     * @param {TableData} tableData
     * @param {TableHeader} tableHeader
     * 
     * @memberOf TableComponent
     */
    initDataTable(tableDataList: ArrayList<TableData>, tableHeader: TableHeader): void {
        this._tableDataList = tableDataList;
        this._tableHeader = tableHeader;

        //设置的默认pageSize不等于系统默认的pageSize
        if (this.pageSize !== ComponentConstants.TABLE_DEFAULT_PAGE_SIZE) {
            this.setPageSize(this.pageSize);
        }

        //设置数据集总数
        this.tableOptions.countDataSize = tableDataList.getSize();

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
        this.tableOptions.currentPageSize = this.pageSize;
        this.tableOptions.endPageIndex = this.pageSize;
    }

    public get tableDataList(): ArrayList<TableData> {
        return this._tableDataList;
    }

    public set tableDataList(value: ArrayList<TableData>) {
        this._tableDataList = value;
    }

    public get tableHeader(): TableHeader {
        return this._tableHeader;
    }

    public set tableHeader(value: TableHeader) {
        this._tableHeader = value;
    }

}
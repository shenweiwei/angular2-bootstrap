import { Component, ElementRef } from '@angular/core';
import { TableOptions, TableData, TableHeader, List } from 'vendor/util';
import { ComponentConstants, DataSetUtil } from 'vendor/common';

@Component({
    selector: 'bootstrap-table',
    templateUrl: 'app/web/vendor/views/table.html',
    styleUrls: ['app/web/vendor/css/vendor.css']
})

export class TableComponent {
    public _tableDatas: List<TableData>;
    public _tableHeaders: List<TableHeader>;

    constructor(public tableOptions: TableOptions, private el: ElementRef) {
        this.tableOptions.currentPageSize = DataSetUtil.getDataForKey(el['nativeElement'], 'pagesize');
    }

    /**
     * 初始化表格
     * 
     * @param {TableData} tableData
     * @param {TableHeader} tableHeader
     * 
     * @memberOf TableComponent
     */
    initDataTable(tableDatas: List<TableData>, tableHeaders: List<TableHeader>): void {
        //初始化赋值
        this._tableDatas = tableDatas;
        this._tableHeaders = tableHeaders;

        //设置数据集总数
        this.tableOptions.countDataSize = this._tableDatas.getSize();

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

        //设置页面显示总数
        this.setPageSize(this.tableOptions.currentPageSize);



        //设置页码集合
        this.setPageNumberList();

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
            this.tableOptions.endPageIndex = pageSize;
        } else {
            this.tableOptions.beginPageIndex = pageSize * (this.tableOptions.currentPageNumber - 1) + 1
            this.tableOptions.endPageIndex = pageSize * this.tableOptions.currentPageNumber;
        }

    }


    /**
     * 
     * 设置pageNumberList
     * 
     * @memberOf TableComponent
     */
    setPageNumberList(): void {
        const maxPageNumber: number = Math.ceil(this.tableOptions.countDataSize / (this.tableOptions.currentPageSize * 1))

        for (let i = 1; i <= maxPageNumber; i++) {
            let pageNumber = new Object();
            pageNumber['index'] = i;
            if (i !== this.tableOptions.currentPageNumber) {
                pageNumber['pageNumberActive'] = false;
            } else {
                pageNumber['pageNumberActive'] = true;
            }

            if (this.tableOptions.pageNumberList.getSize() <= 0) {
                this.tableOptions.pageNumberList.add(pageNumber);
            } else {
                this.tableOptions.pageNumberList.replace(pageNumber, i - 1);
            }
        }

        if (maxPageNumber <= 1) {
            this.tableOptions.turnPageNextDisabled = true;
            this.tableOptions.turnPagePreDisabled = true;
        } else if (this.tableOptions.currentPageNumber <= 1) {
            this.tableOptions.turnPagePreDisabled = true;
            this.tableOptions.turnPageNextDisabled = false;
        } else if (this.tableOptions.currentPageNumber >= maxPageNumber) {
            this.tableOptions.turnPagePreDisabled = false;
            this.tableOptions.turnPageNextDisabled = true;
        }
    }



}
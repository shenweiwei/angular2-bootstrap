import { Component, ElementRef, Input } from '@angular/core';
import { TableOptions, TableData, TableHeader, List } from 'vendor/util';
import { ComponentConstants, DataSetUtil } from 'vendor/common';

@Component({
    selector: 'bootstrap-table',
    templateUrl: 'app/web/vendor/views/table.html',
    styleUrls: ['app/web/vendor/css/vendor.css']
})

export class TableComponent {
    public tableDatas: List<TableData>;
    public tableHeaders: List<TableHeader>;
    public viewTableDatas: List<TableData>;
    public pageSize: number;

    constructor(public tableOptions: TableOptions, private el: ElementRef) {
        this.tableOptions.currentPageSize = DataSetUtil.getDataForKey(el['nativeElement'], 'pagesize');
    }

    /**
     * 初始化表格
     * 
     * @param {TableHeader} headers
     * @param {TableData} datas
     * 
     * @memberOf TableComponent
     */
    initDataTable(headers: List<TableHeader>, datas: List<TableData>): void {
        this.tableHeaders = headers;
        this.tableDatas = datas;
        //设置数据集总数
        this.tableOptions.countDataSize = this.tableDatas.getSize();

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

        //设置页面显示数据
        this.setViewData();
    }


    /**
     * 填充表格数据
     * 
     * @memberOf TableComponent
     */
    setViewData(): void {
        this.viewTableDatas = this.tableDatas;
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
import { Component, Directive, AfterViewInit, Input } from '@angular/core';
import { TableOptions, TableData, TableHeader, ArrayList, List } from 'vendor/util';
import { ComponentConstants, DataSetUtil, BeanUtil, StringUtil } from 'vendor/common';

@Component({
    selector: 'table-component',
    templateUrl: 'app/web/vendor/views/table.html',
    styleUrls: ['app/web/vendor/css/vendor.css']
})

export class TableComponent implements AfterViewInit {
    public tableDatas: List<TableData>;//数据体
    public tableHeaders: List<TableHeader>;//表头
    public viewTableDatas: List<TableData> = new ArrayList();//页面显示的数据集
    public value: string;//搜索框值
    public filterTableDatas: List<TableData>;//过滤过临时存放的数据集
    @Input() pageSize: any;

    constructor(public tableOptions: TableOptions) { }

    ngAfterViewInit(): void {
        this.tableOptions.currentPageSize = this.pageSize;
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
     * 刷新表格缓存数据
     * 
     * @param {TableData} datas
     * 
     * @memberOf TableComponent
     */
    refershData(datas: List<TableData>): void {
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
        } else if (action === ComponentConstants.TABLE_TURN_PAGE_NEXT && this.tableOptions.currentPageNumber < this.tableOptions.getPageNumberLength()) {
            this.tableOptions.currentPageNumber++;
        } else if (action === ComponentConstants.TABLE_TURN_PAGE_PREVIOUS && this.tableOptions.currentPageNumber > 1) {
            this.tableOptions.currentPageNumber--;
        } else {
            this.tableOptions.currentPageNumber = pageNumber;
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
        this.viewTableDatas = new ArrayList();
        BeanUtil.clone(this.filterTableDatas || this.tableDatas, this.viewTableDatas);
        this.viewTableDatas = this.viewTableDatas.subList(this.tableOptions.beginPageIndex - 1, this.tableOptions.endPageIndex);
    }

    /**
     * 设置的默认页面显示数据总数
     * 
     * @param {any} pageSize
     * 
     * @memberOf TableComponent
     */
    setPageSize(pageSize: any): void {
        if (pageSize === ComponentConstants.PAGE_SIZE_ALL) {
            pageSize = 65535;
        }

        this.tableOptions.currentPageSize = pageSize;

        //当前需要显示的数据大于等于实际显示的数据的时候
        const maxPageNumber: number = Math.ceil(this.tableOptions.countDataSize / (this.tableOptions.currentPageSize * 1))

        //设置beginPageIndex,endPageIndex
        //只有一页的情况下
        if (maxPageNumber <= 1) {
            this.tableOptions.currentPageNumber = 1;
            this.tableOptions.beginPageIndex = 1
            this.tableOptions.endPageIndex = this.tableOptions.countDataSize;
            //当前页第一页，总页数多页的情况下
        } else if (this.tableOptions.currentPageNumber <= 1 && maxPageNumber > 1) {
            this.tableOptions.beginPageIndex = 1
            this.tableOptions.endPageIndex = pageSize;
            //当前页是最后一页的情况下
        } else if (this.tableOptions.currentPageNumber === maxPageNumber) {
            this.tableOptions.beginPageIndex = pageSize * (this.tableOptions.currentPageNumber - 1) + 1
            this.tableOptions.endPageIndex = this.tableOptions.countDataSize;
            //页数是在中间的情况下
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
        this.tableOptions.pageNumberList = new ArrayList();

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
            this.tableOptions.turnPageHomeDisabled = true;
            this.tableOptions.turnPageLastDisabled = true;
        } else if (this.tableOptions.currentPageNumber <= 1) {
            this.tableOptions.turnPagePreDisabled = true;
            this.tableOptions.turnPageNextDisabled = false;
            this.tableOptions.turnPageHomeDisabled = true;
            this.tableOptions.turnPageLastDisabled = false;
        } else if (this.tableOptions.currentPageNumber >= maxPageNumber) {
            this.tableOptions.turnPagePreDisabled = false;
            this.tableOptions.turnPageNextDisabled = true;
            this.tableOptions.turnPageHomeDisabled = false;
            this.tableOptions.turnPageLastDisabled = true;
        } else {
            this.tableOptions.turnPagePreDisabled = false;
            this.tableOptions.turnPageNextDisabled = false;
            this.tableOptions.turnPageHomeDisabled = false;
            this.tableOptions.turnPageLastDisabled = false;
        }
    }

    /**
     * 修改页面显示元素数据数
     * 
     * @param {number} pageSize
     * 
     * @memberOf TableComponent
     */
    selectPageSize(pageSize: number): void {
        //设置页面显示总数
        this.setPageSize(pageSize);

        //设置页码集合
        this.setPageNumberList();

        //设置页面显示数据
        this.setViewData();
    }

    /**
     * 文本框变动的回调函数
     */
    changeCallback = (current: string, previous: string, advanceValue: any) => {
        if (StringUtil.isNull(current)) {
            return;
        }

        this.filterTableDatas = new ArrayList<TableData>();

        if (current === '') {
            this.filterTableDatas = this.tableDatas.subList(0, this.tableDatas.getSize());
        } else {
            for (let tabledata of this.tableDatas.toArray()) {
                for (let key in tabledata) {
                    if ((tabledata[key] + '').includes(current)) {
                        this.filterTableDatas.add(tabledata);
                        break;
                    }
                }
            }
        }

        this.tableOptions.countDataSize = this.filterTableDatas.getSize();

        //设置页码集合
        this.setPageNumberList();

        //设置页面显示数据
        this.setViewData();
    }

    tableSort(action:string):void{

    }
}
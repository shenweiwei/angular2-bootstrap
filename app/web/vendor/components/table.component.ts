import { Component, Directive, AfterViewInit, Input, ElementRef } from '@angular/core';
import { TableOptions, TableData, TableHeader, ArrayList, List, ExcelFile, WordFile,CSVFile } from 'vendor/util';
import { ComponentConstants, DataSetUtil, BeanUtil, StringUtil } from 'vendor/common';
import { BaseComponent } from '../components/base.component';

declare const $: any;
let openHeadersPanel: boolean = false;

@Component({
    selector: 'table-component',
    /* SystemJS */
    // templateUrl: 'app/web/vendor/views/table.html',
    // styleUrls: ['app/web/vendor/framework/compass/stylesheets/vendor.css'
    // ,'app/web/vendor/framework/compass/stylesheets/vendor-pad.css']
    /* WebPack */
    templateUrl: '../views/table.html',
    styleUrls: ['../framework/compass/stylesheets/vendor.css',
        '../framework/compass/stylesheets/vendor-pad.css']
})

export class TableComponent extends BaseComponent implements AfterViewInit {
    public tableDatas: List<TableData>;//数据体
    public tableHeaders: List<TableHeader>;//表头
    public viewTableDatas: List<TableData> = new ArrayList();//页面显示的数据集
    public value: string;//搜索框值
    public filterTableDatas: List<TableData>;//过滤过临时存放的数据集
    public sortTableDatas: List<TableData>;//排序过临时存放的数据集
    public tableOptions: TableOptions = new TableOptions();
    @Input() pageSize: any;//页数
    @Input() onSelectPage: Function;//翻页回掉函数
    @Input() globalData: boolean = false;//全量数据显示
    @Input() checkModel: boolean = false;//行数据是否有勾选框
    @Input() updateModel: boolean = false;//是否有更新按钮
    @Input() updateCallBack: Function;//更新的回调函数
    @Input() deleteModel: boolean = false;//是否有删除按钮
    @Input() deleteCallBack: Function;//删除的回调函数

    constructor(private excelFile: ExcelFile, private wordFile: WordFile, private csvFile: CSVFile) {
        super();
    }

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
    initDataTable(datas: List<TableData>, countDataSize: number, headers?: List<TableHeader>): void {
        if (!BeanUtil.isEmpty(headers)) {
            this.tableHeaders = headers;
        }

        this.tableDatas = datas;

        //清空过滤的数据
        this.filterTableDatas = null;

        //设置数据集总数
        this.tableOptions.countDataSize = countDataSize;

        //默认显示第一页
        // this.goPage(this.tableOptions.currentPageNumber, ComponentConstants.TABLE_TURN_PAGE_INIT);

        //设置页面显示总数
        // this.setPageSize(this.tableOptions.currentPageSize);
        this.setPageSize(this.pageSize);

        //设置页码集合
        this.setPageNumberList();

        //设置页面显示数据
        this.setViewData();
    }

    /**
     * 刷新表格缓存数据
     * 
     * @param {TableData} datas
     * 
     * @memberOf TableComponent
     */
    refreshData(datas: List<TableData>, countDataSize?: number): void {
        this.tableDatas = datas;

        //设置数据集总数
        this.tableOptions.countDataSize = countDataSize || this.tableDatas.getSize();

        //设置页面显示数据
        this.setViewData();
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
        //清空过滤的数据
        this.filterTableDatas = null;

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
        // this.setPageSize(this.tableOptions.currentPageSize);
        this.setPageSize(this.pageSize);

        //设置页码集合
        this.setPageNumberList();

        //选择页(不是全量数据)
        if (!this.globalData) {
            this.onSelectPage(this.tableOptions);
        } else {
            this.setViewData();
        }

    }

    /**
     * 填充表格数据
     * 
     * @memberOf TableComponent
     */
    setViewData(): void {
        this.viewTableDatas = new ArrayList();
        BeanUtil.clone(this.filterTableDatas || this.tableDatas, this.viewTableDatas);

        //数据排序
        this.sort();

        //截取数据
        if (!this.globalData) {
            // this.viewTableDatas = this.viewTableDatas.subList(0, this.tableOptions.currentPageSize);
            this.viewTableDatas = this.viewTableDatas.subList(0, this.pageSize);
            console.log(this.viewTableDatas);
        } else {
            this.viewTableDatas = this.viewTableDatas.subList(this.tableOptions.beginPageIndex - 1, this.tableOptions.endPageIndex);
        }

    }

    /**
     * 设置的默认页面显示数据总数
     * 
     * @param {any} pageSize
     * 
     * @memberOf TableComponent
     */
    setPageSize(pageSize: any): void {
        //清空过滤的数据
        this.filterTableDatas = null;

        //设置单页最大显示数
        if (typeof pageSize === 'string' && pageSize.toLowerCase() === ComponentConstants.PAGE_SIZE_ALL || pageSize === 65535) {
            this.pageSize = 65535;
            this.tableOptions.currentPageSize = ComponentConstants.PAGE_SIZE_ALL.toUpperCase();
        } else {
            this.pageSize = pageSize
            this.tableOptions.currentPageSize = this.pageSize;
        }

        //当前需要显示的数据大于等于实际显示的数据的时候
        // const maxPageNumber: number = Math.ceil(this.tableOptions.countDataSize / (this.tableOptions.currentPageSize * 1))
        const maxPageNumber: number = Math.ceil(this.tableOptions.countDataSize / (this.pageSize * 1));

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

        //选择页数(不是全量数据)
        if (!this.globalData) {
            this.onSelectPage(this.tableOptions);
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

        // const maxPageNumber: number = Math.ceil(this.tableOptions.countDataSize / (this.tableOptions.currentPageSize * 1))
        const maxPageNumber: number = Math.ceil(this.tableOptions.countDataSize / (this.pageSize * 1));

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

        if (current === '' && this.globalData) {
            this.filterTableDatas = this.tableDatas.subList(0, this.tableDatas.getSize());
        } else if (current === '' && !this.globalData) {
            this.filterTableDatas = null;
        } else {
            for (let tabledata of this.tableDatas.toArray() as TableData[]) {
                for (let key in tabledata) {
                    if (tabledata[key].includes(current)) {
                        this.filterTableDatas.add(tabledata);
                        break;
                    }
                }
            }
        }

        if (this.globalData) {
            this.tableOptions.countDataSize = this.filterTableDatas.getSize();
            //设置页码集合
            this.setPageNumberList();
        }

        //设置页面显示数据
        this.setViewData();
    }

    setTableSort(header: TableHeader): void {
        if (header.sort === ComponentConstants.SORT_DEFAULT) {
            header.sort = ComponentConstants.SORT_ASC;
        } else if (header.sort === ComponentConstants.SORT_ASC) {
            header.sort = ComponentConstants.SORT_DESC;
        } else if (header.sort === ComponentConstants.SORT_DESC) {
            header.sort = ComponentConstants.SORT_DEFAULT;
        } else {
            header.sort = ComponentConstants.SORT_DEFAULT;
        }


        this.sortTableDatas;
        //设置页码集合
        this.setPageNumberList();

        //设置页面显示数据
        this.setViewData();
    }

    sort(): void {
        //需要排序的字段
        let sortTableHeaders = new ArrayList<TableHeader>();

        for (let tableHeader in this.tableHeaders) {
            if (tableHeader !== ComponentConstants.SORT_DEFAULT) {
                sortTableHeaders.add(tableHeader);
                break;
            }
        }
        if (sortTableHeaders.getSize() > 0) {
            for (let tableData in this.viewTableDatas.toArray()) {

            }
        }
    }

    /**
     * 设置表头
     * 
     * @param {List<TableHeader>} headers
     * 
     * @memberOf TableComponent
     */
    setTableHeader(headers: List<TableHeader>): void {
        this.tableHeaders = headers;
    }


    /**
     * 选择需要显示的列
     * 
     * @param {TableHeader} header
     * 
     * @memberOf TableComponent
     */
    selectHeaderItem(header: TableHeader): void {
        openHeadersPanel = true;

        for (let headerItem of this.tableHeaders.toArray() as TableHeader[]) {
            if (header.key === headerItem.key && headerItem.display === ComponentConstants.DISPLAY_BLOCK) {
                headerItem.display = ComponentConstants.DISPLAY_NONE;
                break;
            } else if (header.key === headerItem.key && headerItem.display === ComponentConstants.DISPLAY_NONE) {
                headerItem.display = ComponentConstants.DISPLAY_BLOCK;
                break;
            }
        }

        $('#filter-headers-panel').on('hide.bs.dropdown', function (event: any) {
            // 在隐藏的时候做一些处理代码，终止隐藏
            if (openHeadersPanel) {
                event.preventDefault();
            }
            openHeadersPanel = false
        });
    }

    /**
     * 获取已选中的数据
     * 
     * @template T
     * @returns {List<T>}
     * 
     * @memberOf TableComponent
     */
    getChecked<T>(): List<T> {
        if (!this.checkModel) {
            return;
        }

        let tableDataItemChecked = new ArrayList<T>();
        for (let tableDataItem of this.viewTableDatas.toArray() as TableData[]) {

            if (tableDataItem.checked) {
                tableDataItemChecked.add(tableDataItem);
            }
        }

        return tableDataItemChecked;
    }

    /**
     * 设置勾选状态
     * 
     * @param {number} index
     * @param {boolean} checked
     * 
     * @memberOf TableComponent
     */
    setChecked(index: number, checked: boolean): void {
        if (!this.checkModel) {
            return;
        }

        let tableDataItem = this.viewTableDatas.get(index) as TableData;
        tableDataItem.checked = checked;
    }

    /**
     * 选中全部复选框
     * 
     * @memberOf TableComponent
     */
    checkedAll(target: any): void {
        if (!this.checkModel) {
            return;
        }

        for (let tableDataItem of this.viewTableDatas.toArray() as TableData[]) {
            if (target.checked) {
                tableDataItem.checked = true;
            } else {
                tableDataItem.checked = false;
            }
        }
    }

    /**
     * 
     * 导出EXCEL
     * 
     * @memberOf TableComponent
     */
    exportExcelFile(): void {
        if (this.tableDatas && this.tableHeaders) {
            this.excelFile.exportTable('test', this.tableDatas.toArray(), this.tableHeaders.toArray());
        } else {
            super.alert('提示', '请先查询再进行导出操作');
        }
    }

    /**
     * 
     * 导出WORD
     * 
     * @memberOf TableComponent
     */
    exportWordFile(): void {
        if (this.tableDatas && this.tableHeaders) {
            this.wordFile.exportTable('test','标题', this.tableDatas.toArray(), this.tableHeaders.toArray());
        } else {
            super.alert('提示', '请先查询再进行导出操作');
        }
    }

    /**
     * 
     * 导出csv
     * 
     * @memberOf TableComponent
     */
    exportCSVFile(): void {
        if (this.tableDatas && this.tableHeaders) {
            this.csvFile.exportTable('test', this.tableDatas.toArray(), this.tableHeaders.toArray());
        } else {
            super.alert('提示', '请先查询再进行导出操作');
        }
    }
}
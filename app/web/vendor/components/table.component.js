"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var util_1 = require('vendor/util');
var common_1 = require('vendor/common');
var TableComponent = (function () {
    function TableComponent(tableOptions, el) {
        var _this = this;
        this.tableOptions = tableOptions;
        this.el = el;
        this.viewTableDatas = new util_1.ArrayList(); //页面显示的数据集
        this.globalData = false; //全量数据显示
        /**
         * 文本框变动的回调函数
         */
        this.changeCallback = function (current, previous, advanceValue) {
            if (common_1.StringUtil.isNull(current)) {
                return;
            }
            _this.filterTableDatas = new util_1.ArrayList();
            if (current === '' && _this.globalData) {
                _this.filterTableDatas = _this.tableDatas.subList(0, _this.tableDatas.getSize());
            }
            else if (current === '' && !_this.globalData) {
                _this.filterTableDatas = null;
            }
            else {
                for (var _i = 0, _a = _this.tableDatas.toArray(); _i < _a.length; _i++) {
                    var tabledata = _a[_i];
                    for (var key in tabledata) {
                        if ((tabledata[key] + '').includes(current)) {
                            _this.filterTableDatas.add(tabledata);
                            break;
                        }
                    }
                }
            }
            if (_this.globalData) {
                _this.tableOptions.countDataSize = _this.filterTableDatas.getSize();
                //设置页码集合
                _this.setPageNumberList();
            }
            //设置页面显示数据
            _this.setViewData();
        };
    }
    TableComponent.prototype.ngAfterViewInit = function () {
        this.tableOptions.currentPageSize = this.pageSize;
    };
    /**
     * 初始化表格
     *
     * @param {TableHeader} headers
     * @param {TableData} datas
     *
     * @memberOf TableComponent
     */
    TableComponent.prototype.initDataTable = function (headers, datas, countDataSize) {
        this.tableHeaders = headers;
        this.tableDatas = datas;
        //清空过滤的数据
        this.filterTableDatas = null;
        //设置数据集总数
        this.tableOptions.countDataSize = countDataSize;
        //默认显示第一页
        // this.goPage(this.tableOptions.currentPageNumber, ComponentConstants.TABLE_TURN_PAGE_INIT);
        //设置页面显示总数
        this.setPageSize(this.tableOptions.currentPageSize);
        //设置页码集合
        this.setPageNumberList();
        //设置页面显示数据
        this.setViewData();
    };
    /**
     * 刷新表格缓存数据
     *
     * @param {TableData} datas
     *
     * @memberOf TableComponent
     */
    TableComponent.prototype.refreshData = function (datas, countDataSize) {
        this.tableDatas = datas;
        //设置数据集总数
        this.tableOptions.countDataSize = countDataSize || this.tableDatas.getSize();
        //设置页面显示数据
        this.setViewData();
    };
    /**
     * 跳转到相关页数
     *
     * @param {number} pageNumber
     * @param {string} action
     *
     * @memberOf TableComponent
     */
    TableComponent.prototype.goPage = function (pageNumber, action) {
        //清空过滤的数据
        this.filterTableDatas = null;
        if (action === common_1.ComponentConstants.TABLE_TURN_PAGE_GO) {
            this.tableOptions.currentPageNumber = pageNumber;
        }
        else if (action === common_1.ComponentConstants.TABLE_TURN_PAGE_NEXT && this.tableOptions.currentPageNumber < this.tableOptions.getPageNumberLength()) {
            this.tableOptions.currentPageNumber++;
        }
        else if (action === common_1.ComponentConstants.TABLE_TURN_PAGE_PREVIOUS && this.tableOptions.currentPageNumber > 1) {
            this.tableOptions.currentPageNumber--;
        }
        else {
            this.tableOptions.currentPageNumber = pageNumber;
        }
        //设置页面显示总数
        this.setPageSize(this.tableOptions.currentPageSize);
        //设置页码集合
        this.setPageNumberList();
        //选择页(不是全量数据)
        if (!this.globalData) {
            this.onSelectPage(this.tableOptions);
        }
        else {
            this.setViewData();
        }
    };
    /**
     * 填充表格数据
     *
     * @memberOf TableComponent
     */
    TableComponent.prototype.setViewData = function () {
        this.viewTableDatas = new util_1.ArrayList();
        common_1.BeanUtil.clone(this.filterTableDatas || this.tableDatas, this.viewTableDatas);
        //数据排序
        this.sort();
        //截取数据
        if (!this.globalData) {
            this.viewTableDatas = this.viewTableDatas.subList(0, this.tableOptions.currentPageSize);
            console.log(this.viewTableDatas);
        }
        else {
            this.viewTableDatas = this.viewTableDatas.subList(this.tableOptions.beginPageIndex - 1, this.tableOptions.endPageIndex);
        }
    };
    /**
     * 设置的默认页面显示数据总数
     *
     * @param {any} pageSize
     *
     * @memberOf TableComponent
     */
    TableComponent.prototype.setPageSize = function (pageSize) {
        //设置单页最大显示数
        if (pageSize === common_1.ComponentConstants.PAGE_SIZE_ALL) {
            pageSize = 65535;
        }
        this.tableOptions.currentPageSize = pageSize;
        //当前需要显示的数据大于等于实际显示的数据的时候
        var maxPageNumber = Math.ceil(this.tableOptions.countDataSize / (this.tableOptions.currentPageSize * 1));
        //设置beginPageIndex,endPageIndex
        //只有一页的情况下
        if (maxPageNumber <= 1) {
            this.tableOptions.currentPageNumber = 1;
            this.tableOptions.beginPageIndex = 1;
            this.tableOptions.endPageIndex = this.tableOptions.countDataSize;
        }
        else if (this.tableOptions.currentPageNumber <= 1 && maxPageNumber > 1) {
            this.tableOptions.beginPageIndex = 1;
            this.tableOptions.endPageIndex = pageSize;
        }
        else if (this.tableOptions.currentPageNumber === maxPageNumber) {
            this.tableOptions.beginPageIndex = pageSize * (this.tableOptions.currentPageNumber - 1) + 1;
            this.tableOptions.endPageIndex = this.tableOptions.countDataSize;
        }
        else {
            this.tableOptions.beginPageIndex = pageSize * (this.tableOptions.currentPageNumber - 1) + 1;
            this.tableOptions.endPageIndex = pageSize * this.tableOptions.currentPageNumber;
        }
    };
    /**
     *
     * 设置pageNumberList
     *
     * @memberOf TableComponent
     */
    TableComponent.prototype.setPageNumberList = function () {
        this.tableOptions.pageNumberList = new util_1.ArrayList();
        var maxPageNumber = Math.ceil(this.tableOptions.countDataSize / (this.tableOptions.currentPageSize * 1));
        for (var i = 1; i <= maxPageNumber; i++) {
            var pageNumber = new Object();
            pageNumber['index'] = i;
            if (i !== this.tableOptions.currentPageNumber) {
                pageNumber['pageNumberActive'] = false;
            }
            else {
                pageNumber['pageNumberActive'] = true;
            }
            if (this.tableOptions.pageNumberList.getSize() <= 0) {
                this.tableOptions.pageNumberList.add(pageNumber);
            }
            else {
                this.tableOptions.pageNumberList.replace(pageNumber, i - 1);
            }
        }
        if (maxPageNumber <= 1) {
            this.tableOptions.turnPageNextDisabled = true;
            this.tableOptions.turnPagePreDisabled = true;
            this.tableOptions.turnPageHomeDisabled = true;
            this.tableOptions.turnPageLastDisabled = true;
        }
        else if (this.tableOptions.currentPageNumber <= 1) {
            this.tableOptions.turnPagePreDisabled = true;
            this.tableOptions.turnPageNextDisabled = false;
            this.tableOptions.turnPageHomeDisabled = true;
            this.tableOptions.turnPageLastDisabled = false;
        }
        else if (this.tableOptions.currentPageNumber >= maxPageNumber) {
            this.tableOptions.turnPagePreDisabled = false;
            this.tableOptions.turnPageNextDisabled = true;
            this.tableOptions.turnPageHomeDisabled = false;
            this.tableOptions.turnPageLastDisabled = true;
        }
        else {
            this.tableOptions.turnPagePreDisabled = false;
            this.tableOptions.turnPageNextDisabled = false;
            this.tableOptions.turnPageHomeDisabled = false;
            this.tableOptions.turnPageLastDisabled = false;
        }
    };
    /**
     * 修改页面显示元素数据数
     *
     * @param {number} pageSize
     *
     * @memberOf TableComponent
     */
    TableComponent.prototype.selectPageSize = function (pageSize) {
        //设置页面显示总数
        this.setPageSize(pageSize);
        //设置页码集合
        this.setPageNumberList();
        //设置页面显示数据
        this.setViewData();
    };
    TableComponent.prototype.setTableSort = function (header) {
        if (header.sort === common_1.ComponentConstants.SORT_DEFAULT) {
            header.sort = common_1.ComponentConstants.SORT_ASC;
        }
        else if (header.sort === common_1.ComponentConstants.SORT_ASC) {
            header.sort = common_1.ComponentConstants.SORT_DESC;
        }
        else if (header.sort === common_1.ComponentConstants.SORT_DESC) {
            header.sort = common_1.ComponentConstants.SORT_DEFAULT;
        }
        else {
            header.sort = common_1.ComponentConstants.SORT_DEFAULT;
        }
        this.sortTableDatas;
        //设置页码集合
        this.setPageNumberList();
        //设置页面显示数据
        this.setViewData();
    };
    TableComponent.prototype.sort = function () {
        //需要排序的字段
        var sortTableHeaders = new util_1.ArrayList();
        for (var tableHeader in this.tableHeaders) {
            if (tableHeader !== common_1.ComponentConstants.SORT_DEFAULT) {
                sortTableHeaders.add(tableHeader);
                break;
            }
        }
        if (sortTableHeaders.getSize() > 0) {
            for (var tableData in this.viewTableDatas.toArray()) {
            }
        }
    };
    __decorate([
        //排序过临时存放的数据集
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TableComponent.prototype, "pageSize", void 0);
    __decorate([
        //页数
        core_1.Input(), 
        __metadata('design:type', Function)
    ], TableComponent.prototype, "onSelectPage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TableComponent.prototype, "globalData", void 0);
    TableComponent = __decorate([
        core_1.Component({
            selector: 'table-component',
            templateUrl: 'app/web/vendor/views/table.html',
            styleUrls: ['app/web/vendor/css/vendor.css']
        }), 
        __metadata('design:paramtypes', [util_1.TableOptions, core_1.ElementRef])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map
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
    function TableComponent(tableOptions) {
        this.tableOptions = tableOptions;
        this.viewTableDatas = new util_1.ArrayList();
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
    TableComponent.prototype.initDataTable = function (headers, datas) {
        this.tableHeaders = headers;
        this.tableDatas = datas;
        //设置数据集总数
        this.tableOptions.countDataSize = this.tableDatas.getSize();
        //默认显示第一页
        this.goPage(this.tableOptions.currentPageNumber, common_1.ComponentConstants.TABLE_TURN_PAGE_GO);
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
        if (action === common_1.ComponentConstants.TABLE_TURN_PAGE_GO) {
            this.tableOptions.currentPageNumber = pageNumber;
        }
        else if (action === common_1.ComponentConstants.TABLE_TURN_PAGE_NEXT) {
            this.tableOptions.currentPageNumber++;
        }
        else if (action === common_1.ComponentConstants.TABLE_TURN_PAGE_PREVIOUS) {
            this.tableOptions.currentPageNumber--;
        }
        //设置页面显示总数
        this.setPageSize(this.tableOptions.currentPageSize);
        //设置页码集合
        this.setPageNumberList();
        //设置页面显示数据
        this.setViewData();
    };
    /**
     * 填充表格数据
     *
     * @memberOf TableComponent
     */
    TableComponent.prototype.setViewData = function () {
        this.viewTableDatas = new util_1.ArrayList();
        common_1.BeanUtil.clone(this.tableDatas, this.viewTableDatas);
        this.viewTableDatas.subList(this.tableOptions.beginPageIndex - 1, this.tableOptions.endPageIndex);
    };
    /**
     * 设置的默认页面显示数据总数
     *
     * @param {number} pageSize
     *
     * @memberOf TableComponent
     */
    TableComponent.prototype.setPageSize = function (pageSize) {
        this.tableOptions.currentPageSize = pageSize;
        if (this.tableOptions.currentPageNumber <= 1) {
            this.tableOptions.beginPageIndex = 1;
            this.tableOptions.endPageIndex = pageSize;
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
        }
        else if (this.tableOptions.currentPageNumber <= 1) {
            this.tableOptions.turnPagePreDisabled = true;
            this.tableOptions.turnPageNextDisabled = false;
        }
        else if (this.tableOptions.currentPageNumber >= maxPageNumber) {
            this.tableOptions.turnPagePreDisabled = false;
            this.tableOptions.turnPageNextDisabled = true;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TableComponent.prototype, "pageSize", void 0);
    TableComponent = __decorate([
        core_1.Component({
            selector: 'table-component',
            templateUrl: 'app/web/vendor/views/table.html',
            styleUrls: ['app/web/vendor/css/vendor.css']
        }), 
        __metadata('design:paramtypes', [util_1.TableOptions])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map
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
    TableComponent.prototype.initDataTable = function (tableDatas) {
        this._tableDatas = tableDatas;
        //设置页面显示总数
        this.setPageSize(this.pageSize);
        //设置数据集总数
        this.tableOptions.countDataSize = tableDatas.getSize();
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
        this.setViewData();
    };
    /**
     * 填充表格数据
     *
     * @memberOf TableComponent
     */
    TableComponent.prototype.setViewData = function () {
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
            this.tableOptions.endPageIndex = this.pageSize;
        }
        else {
            this.tableOptions.beginPageIndex = this.tableOptions.currentPageSize * (this.tableOptions.currentPageNumber - 1) + 1;
            this.tableOptions.endPageIndex = this.tableOptions.currentPageSize * this.tableOptions.currentPageNumber;
        }
    };
    Object.defineProperty(TableComponent.prototype, "tableDatas", {
        get: function () {
            return this._tableDatas;
        },
        set: function (value) {
            this._tableDatas = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input('pageSize'), 
        __metadata('design:type', Number)
    ], TableComponent.prototype, "pageSize", void 0);
    TableComponent = __decorate([
        core_1.Component({
            selector: 'bootstrap-table',
            templateUrl: 'app/web/vendor/views/table.html',
            styleUrls: ['app/web/vendor/css/vendor.css']
        }), 
        __metadata('design:paramtypes', [util_1.TableOptions])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map
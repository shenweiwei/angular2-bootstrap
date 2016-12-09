"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var base_component_1 = require('../../vendor/components/base.component');
var table_component_1 = require('../../vendor/components/table.component');
var button_component_1 = require('../../vendor/components/button.component');
var application_vo_1 = require('../../../js/com/sgm/dms/ops/vo/application.vo');
var util_1 = require('vendor/util');
var common_1 = require('vendor/common');
var application_service_impl_1 = require('../../../js/com/sgm/dms/ops/services/application.service.impl');
var ApplicationSearchComponent = (function (_super) {
    __extends(ApplicationSearchComponent, _super);
    function ApplicationSearchComponent(applicationServiceImpl) {
        var _this = this;
        _super.call(this);
        this.applicationServiceImpl = applicationServiceImpl;
        this.applicationVo = new application_vo_1.ApplicationVo();
        this.url = 'web.dmsops/application/query';
        /**
         *
         * 翻页的回调函数
         *
         * @memberOf ApplicationSearchComponent
         */
        this.onSelectPage = function (tableOptions) {
            _this.applicationVo.beginNo = tableOptions.beginPageIndex;
            _this.applicationVo.endNo = tableOptions.endPageIndex;
            // this.applicationServiceImpl.searchApplication(this.url, this.applicationVo, (response) => {
            //     let tableDataList = TableUtil.setTableDatas(response[0]);
            //     this.tableComponent.refreshData(tableDataList, response[1].total);
            // });
        };
        /**
         * 更新的回调函数
         *
         * @memberOf ApplicationSearchComponent
         */
        this.updateCallBack = function (tableData) {
            console.log(tableData);
        };
        /**
         * 删除的回调函数
         *
         * @memberOf ApplicationSearchComponent
         */
        this.deleteCallBack = function (tableData) {
            console.log(tableData);
        };
    }
    ApplicationSearchComponent.prototype.ngOnInit = function () {
        this.tableComponent.setTableHeader(this.getTableHeaders());
    };
    /**
     * 查询数据
     *
     *
     * @memberOf ApplicationSearchComponent
     */
    ApplicationSearchComponent.prototype.search = function () {
        // this.applicationServiceImpl.searchApplication(this.url, this.applicationVo, (response) => {
        //     let tableDataList = TableUtil.setTableDatas(response[0]);
        //     this.tableComponent.initDataTable(tableDataList, response[1].total);
        // });
        this.tableComponent.initDataTable(this.virtualData(), 10);
    };
    ApplicationSearchComponent.prototype.reset = function () {
        _super.prototype.openProgress.call(this);
        // super.closeProgress();
    };
    /**
     * 获取表头
     *
     * @returns {List<TableHeader>}
     *
     * @memberOf ApplicationSearchComponent
     */
    ApplicationSearchComponent.prototype.getTableHeaders = function () {
        var columnsEnName = ['appId', 'appChnName', 'appEngName', 'appOwner', 'updateDate', 'remark'];
        var columnsCnName = ['应用编号', '应用中文名', '应用英文名', '应用负责人', '更新时间', '备注'];
        return common_1.TableUtil.setTableHeaders(columnsEnName, columnsCnName);
    };
    /**
     * 虚拟数据
     *
     * @returns {List<TableData>}
     *
     * @memberOf ApplicationSearchComponent
     */
    ApplicationSearchComponent.prototype.virtualData = function () {
        var tableDataList = new util_1.ArrayList();
        for (var i = 0; i < 10; i++) {
            var tableData = new util_1.TableData();
            tableData.index = i + 1;
            tableData['appId'] = 'appid' + (i + 1);
            tableDataList.add(tableData);
        }
        return tableDataList;
    };
    __decorate([
        core_1.ViewChild(table_component_1.TableComponent), 
        __metadata('design:type', table_component_1.TableComponent)
    ], ApplicationSearchComponent.prototype, "tableComponent", void 0);
    __decorate([
        core_1.ViewChild(button_component_1.ButtonComponent), 
        __metadata('design:type', button_component_1.ButtonComponent)
    ], ApplicationSearchComponent.prototype, "buttonComponent", void 0);
    ApplicationSearchComponent = __decorate([
        core_1.Component({
            /* SystemJS */
            // templateUrl: 'app/web/views/application/search.html',
            /* WebPack */
            templateUrl: '../../views/application/search.html',
            entryComponents: [table_component_1.TableComponent]
        }), 
        __metadata('design:paramtypes', [application_service_impl_1.ApplicationServiceImpl])
    ], ApplicationSearchComponent);
    return ApplicationSearchComponent;
}(base_component_1.BaseComponent));
exports.ApplicationSearchComponent = ApplicationSearchComponent;
//# sourceMappingURL=search.component.js.map
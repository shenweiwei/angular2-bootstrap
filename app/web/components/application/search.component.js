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
var base_component_1 = require('../base.component');
var table_component_1 = require('../../vendor/components/table.component');
var application_vo_1 = require('../../../js/com/sgm/dms/ops/vo/application.vo');
var util_1 = require('vendor/util');
var ApplicationSearchComponent = (function (_super) {
    __extends(ApplicationSearchComponent, _super);
    function ApplicationSearchComponent() {
        _super.apply(this, arguments);
        this.application = new application_vo_1.ApplicationVo();
    }
    ApplicationSearchComponent.prototype.search = function () {
        this.tableComponent.initDataTable(this.getTableHeaders(), this.getTableDatas());
    };
    ApplicationSearchComponent.prototype.getTableHeaders = function () {
        var tableHeaders = new util_1.ArrayList();
        var columnsEnName = ['appId', 'appChnName', 'appEngName', 'appOwner', 'updateDate', 'remark'];
        var columnsCnName = ['应用编号', '应用中文名', '应用英文名', '应用负责人', '更新时间', '备注'];
        for (var i = 0; i < columnsEnName.length; i++) {
            var tableHeader = new util_1.TableHeader();
            tableHeader.key = columnsEnName[i];
            tableHeader.desc = columnsCnName[i];
            tableHeaders.add(tableHeader);
        }
        return tableHeaders;
    };
    ApplicationSearchComponent.prototype.getTableDatas = function () {
        var tableDatas = new util_1.ArrayList();
        for (var i = 1; i <= 30; i++) {
            var tableData = new util_1.TableData();
            tableData['appId'] = i;
            tableData['appChnName'] = i;
            tableData['appEngName'] = i;
            tableDatas.add(tableData);
        }
        return tableDatas;
    };
    __decorate([
        core_1.ViewChild(table_component_1.TableComponent), 
        __metadata('design:type', table_component_1.TableComponent)
    ], ApplicationSearchComponent.prototype, "tableComponent", void 0);
    ApplicationSearchComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/web/views/application/search.html',
            entryComponents: [table_component_1.TableComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ApplicationSearchComponent);
    return ApplicationSearchComponent;
}(base_component_1.BaseComponent));
exports.ApplicationSearchComponent = ApplicationSearchComponent;
//# sourceMappingURL=search.component.js.map
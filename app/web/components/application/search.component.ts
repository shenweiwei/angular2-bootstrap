import { Component, Input, ViewChild } from '@angular/core';
import { BaseComponent } from '../base.component';
import { TableComponent } from '../../vendor/components/table.component';
import { ApplicationVo } from '../../../js/com/sgm/dms/ops/vo/application.vo';
import { TableData, TableHeader, ArrayList, TableOptions, List } from 'vendor/util';
import { TableUtil } from 'vendor/common';
import { ApplicationServiceImpl } from '../../../js/com/sgm/dms/ops/services/application.service.impl';

@Component({
    templateUrl: 'app/web/views/application/search.html',
    entryComponents: [TableComponent]
})

export class ApplicationSearchComponent extends BaseComponent {
    public applicationVo: ApplicationVo = new ApplicationVo();

    @ViewChild(TableComponent) tableComponent: TableComponent;

    constructor(private applicationServiceImpl: ApplicationServiceImpl) {
        super();
    }

    search(): void {
        this.applicationVo.appEngName = 'FOL';
        const url = 'web.dmsops/application/query';
        this.applicationServiceImpl.searchApplication(url, this.applicationVo, (response) => {
            const tableDataList = TableUtil.setTableDatas(response);
            this.tableComponent.initDataTable(this.getTableHeaders(), tableDataList);
        });
    }

    getTableHeaders(): List<TableHeader> {
        const columnsEnName = ['appId', 'appChnName', 'appEngName', 'appOwner', 'updateDate', 'remark'];
        const columnsCnName = ['应用编号', '应用中文名', '应用英文名', '应用负责人', '更新时间', '备注'];

        return TableUtil.setTableHeaders(columnsEnName, columnsCnName);
    }

}
import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { TableComponent } from '../../vendor/components/table.component';
import { ApplicationVo } from '../../../js/com/sgm/dms/ops/vo/application.vo';
import { TableData, TableHeader, ArrayList, TableOptions, List } from 'vendor/util';
import { TableUtil } from 'vendor/common';
import { ApplicationServiceImpl } from '../../../js/com/sgm/dms/ops/services/application.service.impl';

@Component({
    templateUrl: 'app/web/views/application/search.html',
    entryComponents: [TableComponent]
})

export class ApplicationSearchComponent implements OnInit {
    public applicationVo: ApplicationVo = new ApplicationVo();
    public url: string = 'web.dmsops/application/query';

    @ViewChild(TableComponent) tableComponent: TableComponent;

    constructor(private applicationServiceImpl: ApplicationServiceImpl) {
    }

    ngOnInit(): void {
        this.tableComponent.setTableHeader(this.getTableHeaders());
    }

    /**
     * 查询数据
     * 
     * 
     * @memberOf ApplicationSearchComponent
     */
    search(): void {
        // this.applicationServiceImpl.searchApplication(this.url, this.applicationVo, (response) => {
        //     let tableDataList = TableUtil.setTableDatas(response[0]);
        //     this.tableComponent.initDataTable(tableDataList, response[1].total);
        // });

        this.tableComponent.initDataTable(this.virtualData(), 10);
    }

    reset(): void {
        this.tableComponent.getChecked();
    }

    /**
     * 获取表头
     * 
     * @returns {List<TableHeader>}
     * 
     * @memberOf ApplicationSearchComponent
     */
    getTableHeaders(): List<TableHeader> {
        const columnsEnName = ['appId', 'appChnName', 'appEngName', 'appOwner', 'updateDate', 'remark'];
        const columnsCnName = ['应用编号', '应用中文名', '应用英文名', '应用负责人', '更新时间', '备注'];

        return TableUtil.setTableHeaders(columnsEnName, columnsCnName);
    }

    /**
     * 虚拟数据
     * 
     * @returns {List<TableData>}
     * 
     * @memberOf ApplicationSearchComponent
     */
    virtualData(): List<TableData> {
        let tableDataList = new ArrayList<TableData>();
        for (let i = 0; i < 10; i++) {
            let tableData = new TableData();
            tableData.index = i + 1;
            tableData['appId'] = 'appid' + (i + 1);
            tableDataList.add(tableData);
        }

        return tableDataList;
    }

    /**
     * 
     * 翻页的回调函数
     * 
     * @memberOf ApplicationSearchComponent
     */
    onSelectPage = (tableOptions: TableOptions) => {
        this.applicationVo.beginNo = tableOptions.beginPageIndex;
        this.applicationVo.endNo = tableOptions.endPageIndex;

        // this.applicationServiceImpl.searchApplication(this.url, this.applicationVo, (response) => {
        //     let tableDataList = TableUtil.setTableDatas(response[0]);
        //     this.tableComponent.refreshData(tableDataList, response[1].total);
        // });
    }

    /**
     * 更新的回调函数
     * 
     * @memberOf ApplicationSearchComponent
     */
    updateCallBack = (tableData: TableData) => {
        console.log(tableData);
    }

    /**
     * 删除的回调函数
     * 
     * @memberOf ApplicationSearchComponent
     */
    deleteCallBack = (tableData: TableData) => {
        console.log(tableData);
    }
}
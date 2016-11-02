import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';
import { TableComponent } from '../../vendor/components/table.component';
import { ApplicationVo } from '../../../js/com/sgm/dms/ops/vo/application.vo';

@Component({
    templateUrl: 'app/web/views/application/search.html',
    entryComponents: [TableComponent]
})

export class ApplicationSearch extends BaseComponent implements OnInit {
    public application: ApplicationVo = new ApplicationVo();


    ngOnInit(): void {
        super.ngOnInit();
    }
}
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';
import { TableComponent } from '../../vendor/components/table.component';

@Component({
    templateUrl: 'app/web/views/application/search.html',
    entryComponents: [TableComponent]
})

export class ApplicationSearch extends BaseComponent implements OnInit {

    ngOnInit(): void {
        super.ngOnInit();
    }
}
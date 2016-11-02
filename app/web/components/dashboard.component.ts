import { Component, OnInit } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
    templateUrl: 'app/web/views/dashboard.html'
})

export class DashBoardComponent extends BaseComponent implements OnInit{

    ngOnInit(): void {
        super.ngOnInit();
    }

}

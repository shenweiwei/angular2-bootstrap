import { OnInit } from '@angular/core';
declare var Main: any;
declare var UIModals: any;
declare var UIElements: any;
export class ViewComponent implements OnInit {

    ngOnInit(): void {
        Main.init();
        UIModals.init();
        UIElements.init();
    }
}
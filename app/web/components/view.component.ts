import { OnInit } from '@angular/core';
declare var Main: any;

export class ViewComponent implements OnInit{

    ngOnInit():void{
        Main.init();
    }
}
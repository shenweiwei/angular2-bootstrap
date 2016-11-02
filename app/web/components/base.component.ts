import { OnInit } from '@angular/core';
declare var Main: any;

export class BaseComponent implements OnInit{

    constructor(){
        
    }

    ngOnInit():void{
        Main.init();
    }
}
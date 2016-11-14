import { Component } from '@angular/core';
import { List,MenuItem } from 'vendor/util';

@Component({
    selector: 'my-app',
    templateUrl: 'app/web/views/app.html'
})

export class AppComponent {
    public menuList: List<any[]>;
    constructor() { }
}

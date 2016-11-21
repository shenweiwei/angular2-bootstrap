import { Component, AfterViewInit, ReflectiveInjector } from '@angular/core';
import { NavBarItem, List, ArrayList } from 'vendor/util';

@Component({
    selector: 'navbar-component',
    templateUrl: 'app/web/vendor/views/navbar.html'
})

export class NavBarComponent implements AfterViewInit {
    public navBarItemList: List<NavBarItem> = new ArrayList<NavBarItem>();

    ngAfterViewInit(): void {
    }

    setNavBarItem(navBarItem: NavBarItem): void {
        this.navBarItemList.add(navBarItem);
        console.log(this.navBarItemList);
    }

    clean(): void {
        this.navBarItemList.clean();
    }

}
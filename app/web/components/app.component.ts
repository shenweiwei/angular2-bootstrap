import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from '../vendor/components/menu.component';
import { NavBarComponent } from '../vendor/components/navbar.component';
import { ComponentConstants } from 'vendor/common';

@Component({
    selector: 'my-app',
    templateUrl: 'app/web/views/app.html',
    entryComponents: [MenuComponent]
})

export class AppComponent implements AfterViewInit {
    @ViewChild(MenuComponent) menuComponent: MenuComponent;
    @ViewChild(NavBarComponent) navBarComponent: NavBarComponent;

    public appOptions: any = {};

    ngOnInit(): void {
        this.initClass();
    }

    /**
     * 页面显示完成做一些初始化的事情
     * 
     * 
     * @memberOf AppComponent
     */
    ngAfterViewInit(): void {
        this.menuComponent.initMenu(this.navBarComponent);
        // this.navBarComponent
    }

    /**
     * 变更显示/隐藏 menuItem
     * 
     * @memberOf AppComponent
     */
    changeClipChevron(): void {
        if (this.appOptions['clipChevron'] === ComponentConstants.CLIP_CHEVRON_LEFT) {
            this.appOptions['clipChevron'] = ComponentConstants.CLIP_CHEVRON_RIGHT;
        } else {
            this.appOptions['clipChevron'] = ComponentConstants.CLIP_CHEVRON_LEFT
        }
    }

    /**
     * 
     * 初始化样式
     * 
     * @memberOf AppComponent
     */
    initClass(): void {
        this.appOptions['clipChevron'] = ComponentConstants.CLIP_CHEVRON_LEFT;
    }

}

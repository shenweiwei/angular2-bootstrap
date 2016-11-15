import { Component, AfterViewInit, OnInit } from '@angular/core';
import { List, ArrayList, MenuItem, SubMenuItem } from 'vendor/util';
import { ComponentConstants } from 'vendor/common';

@Component({
    selector: 'my-app',
    templateUrl: 'app/web/views/app.html'
})

export class AppComponent implements AfterViewInit, OnInit {
    public menuList: List<MenuItem> = new ArrayList<MenuItem>();
    public appOptions: any = {};

    ngOnInit(): void {
        this.initClass();
    }

    ngAfterViewInit(): void {
        this.searchMenu();
    }
    /**
     * 查询menu
     * 
     * @memberOf AppComponent
     */
    searchMenu(): void {
        this.virtualData();
    }

    /**
     * 创建虚拟数据
     * 
     * @memberOf AppComponent
     */
    virtualData(): void {
        let menuitem_one = new MenuItem();
        menuitem_one.index = 1;
        menuitem_one.active = true;
        menuitem_one.name = 'Dashboard';
        menuitem_one.open = true;
        this.menuList.add(menuitem_one);

        let menuitem_two = new MenuItem();
        menuitem_two.index = 2;
        menuitem_two.active = false;
        menuitem_two.name = '应用管理';
        menuitem_two.open = false;

        let subMenuItem_one = new SubMenuItem();
        subMenuItem_one.index = 1;
        subMenuItem_one.name = '应用查询';
        subMenuItem_one.isNew = true;
        subMenuItem_one.routerLink = '/application/search';
        menuitem_two.subItem.add(subMenuItem_one)

        let subMenuItem_two = new SubMenuItem();
        subMenuItem_two.index = 2;
        subMenuItem_two.name = '应用新建';
        subMenuItem_two.isNew = true;
        subMenuItem_two.routerLink = '/application/create'
        menuitem_two.subItem.add(subMenuItem_two)

        this.menuList.add(menuitem_two);

    }

    selectMenu(menuItem: MenuItem): void {
        for (let tempMenuItem of this.menuList.toArray()) {
            tempMenuItem['active'] = false;
            tempMenuItem['open'] = false;
        }

        menuItem.active = true;
        menuItem.open = true
    }

    initClass(): void {
        this.appOptions['clipChevron'] = ComponentConstants.CLIP_CHEVRON_LEFT;
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
}

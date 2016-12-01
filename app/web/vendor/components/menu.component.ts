import { Component, trigger, state, style, transition, animate, ViewChild, ReflectiveInjector } from '@angular/core';
import { List, ArrayList, MenuItem, SubMenuItem, MenuOptions, NavBarItem } from 'vendor/util';
import { ComponentConstants, DataSetUtil, BeanUtil } from 'vendor/common';
import { NavBarComponent } from './navbar.component';

@Component({
    selector: 'menu-component',
    templateUrl: 'app/web/vendor/views/menu.html',
    entryComponents: [NavBarComponent],
    animations: [
        trigger('menuState', [
            state('inactive', style({ height: 0 })),
            state('active', style({ height: '*' })),
            transition('inactive => active', animate('0.3s ease-in')),
            transition('active => inactive', animate('0.3s ease-out'))
        ])
    ]
})

export class MenuComponent {
    public menuList: List<MenuItem> = new ArrayList<MenuItem>();
    private navBarComponent: NavBarComponent;

    constructor(private menuOptions: MenuOptions) {
    }
    /**
     * 查询menu
     * 
     * @memberOf AppComponent
     */
    initMenu(navBarComponent: NavBarComponent): void {
        this.navBarComponent = navBarComponent;
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
        menuitem_two.subItem.add(subMenuItem_one);

        let subMenuItem_two = new SubMenuItem();
        subMenuItem_two.index = 2;
        subMenuItem_two.name = '应用新建';
        subMenuItem_two.isNew = true;
        subMenuItem_two.routerLink = '/application/search';
        menuitem_two.subItem.add(subMenuItem_two);
        this.menuList.add(menuitem_two);

        let menuitem_three = new MenuItem();
        menuitem_three.index = 3;
        menuitem_three.active = false;
        menuitem_three.name = '应用管理';
        menuitem_three.open = false;

        let subMenuItem_three = new SubMenuItem();
        subMenuItem_three.index = 1;
        subMenuItem_three.name = '应用查询';
        subMenuItem_three.isNew = true;
        subMenuItem_three.routerLink = '/application/search';
        menuitem_three.subItem.add(subMenuItem_three);

        let subMenuItem_four = new SubMenuItem();
        subMenuItem_four.index = 2;
        subMenuItem_four.name = '应用新建';
        subMenuItem_four.isNew = true;
        subMenuItem_four.routerLink = '/application/search';
        menuitem_three.subItem.add(subMenuItem_four);

        this.menuList.add(menuitem_three);
    }

    /**
     * 选择母菜单
     * 
     * @param {MenuItem} menuItem
     * 
     * @memberOf AppComponent
     */
    selectMenuItem(menuItem: MenuItem, target: any): void {
        //点击子菜单会，母菜单的click事件也会响应所以会把子菜单的响应return
        if (DataSetUtil.getDataForKey(target, 'item') === 'submenu') {
            return;
        }

        //收缩所有打开的menuitem
        for (let tempMenuItem of this.menuList.toArray() as MenuItem[]) {
            tempMenuItem.open = false;
            tempMenuItem.active = false;
        }

        //展开子菜单
        menuItem.active = true;//只有激活了收缩动画才有效果
        menuItem.open = true;

        //设置第一次激活的MenuItem
        if (!this.menuOptions.preActiveItem) {
            this.menuOptions.preActiveItem = menuItem;
        } else if (this.menuOptions.preActiveItem && !this.menuOptions.currentActiveItem) {
            this.menuOptions.currentActiveItem = menuItem;

            if (this.menuOptions.preActiveItem !== this.menuOptions.currentActiveItem) {
                this.menuOptions.preActiveItem.state = "inactive"
            }
        } else {
            this.menuOptions.preActiveItem = this.menuOptions.currentActiveItem;
            this.menuOptions.currentActiveItem = menuItem;

            if (this.menuOptions.preActiveItem !== this.menuOptions.currentActiveItem) {
                this.menuOptions.preActiveItem.state = "inactive"
            }
        }

        //动画切换效果
        if (menuItem.state === 'inactive') {
            menuItem.state = "active";
        } else {
            menuItem.state = "inactive";
        }

        //创建一个管理层级的navBar实体
        let navBarItem = new NavBarItem();
        navBarItem.name = menuItem.name;
        navBarItem.active = true;

        //清楚设置
        this.navBarComponent.clean();
        this.menuOptions.currentActiveSubItem = undefined;
        this.menuOptions.preActiveSubItem = undefined;

        //设置navBarItem
        this.navBarComponent.setNavBarItem(navBarItem);
    }

    /**
     * 选择子菜单
     * 
     * @param {MenuItem} menuItem
     * 
     * @memberOf AppComponent
     */
    selectSubMenuItem(menuItem: MenuItem, subMenuItem: SubMenuItem, target: any): void {
        for (let tempMenuItem of this.menuList.toArray() as MenuItem[]) {
            tempMenuItem.active = false;
        }

        menuItem.active = true;

        //设置navbar
        if (this.menuOptions.currentActiveSubItem === this.menuOptions.preActiveSubItem && this.menuOptions.currentActiveSubItem !== undefined) {
            return;
        }

        let navBarItem = new NavBarItem();
        navBarItem.name = subMenuItem.name;
        navBarItem.active = true;
        navBarItem.routerLink = subMenuItem.routerLink;

        if (this.menuOptions.preActiveSubItem === undefined && this.menuOptions.currentActiveSubItem === undefined) {
            this.navBarComponent.setNavBarItem(navBarItem);
        } else {
            this.navBarComponent.replaceNavBarItem(navBarItem);
        }

        if (this.menuOptions.currentActiveSubItem) {
            this.menuOptions.preActiveSubItem = this.menuOptions.currentActiveSubItem;
            this.menuOptions.currentActiveSubItem = subMenuItem;
        } else {
            this.menuOptions.currentActiveSubItem = subMenuItem;
        }
    }

    /**
     * 收缩或打开的menuitem
     * 
     * @param {boolean} isShow
     * 
     * @memberOf MenuComponent
     */
    showSubMenuItem(isShow: boolean): void {
        if (isShow) {
            for (let tempMenuItem of this.menuList.toArray() as MenuItem[]) {
                tempMenuItem.state = 'active';
            }
        }else{
            for (let tempMenuItem of this.menuList.toArray() as MenuItem[]) {
                tempMenuItem.state = 'inactive';
            }
        }
    }
}
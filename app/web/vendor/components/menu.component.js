"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var util_1 = require('vendor/util');
var common_1 = require('vendor/common');
var navbar_component_1 = require('./navbar.component');
var MenuComponent = (function () {
    function MenuComponent(menuOptions) {
        this.menuOptions = menuOptions;
        this.menuList = new util_1.ArrayList();
    }
    /**
     * 查询menu
     *
     * @memberOf AppComponent
     */
    MenuComponent.prototype.initMenu = function (navBarComponent) {
        this.navBarComponent = navBarComponent;
        this.virtualData();
    };
    /**
     * 创建虚拟数据
     *
     * @memberOf AppComponent
     */
    MenuComponent.prototype.virtualData = function () {
        var menuitem_one = new util_1.MenuItem();
        menuitem_one.index = 1;
        menuitem_one.active = true;
        menuitem_one.name = 'Dashboard';
        menuitem_one.open = true;
        this.menuList.add(menuitem_one);
        var menuitem_two = new util_1.MenuItem();
        menuitem_two.index = 2;
        menuitem_two.active = false;
        menuitem_two.name = '应用管理';
        menuitem_two.open = false;
        var subMenuItem_one = new util_1.SubMenuItem();
        subMenuItem_one.index = 1;
        subMenuItem_one.name = '应用查询';
        subMenuItem_one.isNew = true;
        subMenuItem_one.routerLink = '/application/search';
        menuitem_two.subItem.add(subMenuItem_one);
        var subMenuItem_two = new util_1.SubMenuItem();
        subMenuItem_two.index = 2;
        subMenuItem_two.name = '应用新建';
        subMenuItem_two.isNew = true;
        subMenuItem_two.routerLink = '/application/create';
        menuitem_two.subItem.add(subMenuItem_two);
        this.menuList.add(menuitem_two);
        var menuitem_three = new util_1.MenuItem();
        menuitem_three.index = 3;
        menuitem_three.active = false;
        menuitem_three.name = '应用管理';
        menuitem_three.open = false;
        var subMenuItem_three = new util_1.SubMenuItem();
        subMenuItem_three.index = 1;
        subMenuItem_three.name = '应用查询';
        subMenuItem_three.isNew = true;
        subMenuItem_three.routerLink = '/application/search';
        menuitem_three.subItem.add(subMenuItem_three);
        var subMenuItem_four = new util_1.SubMenuItem();
        subMenuItem_four.index = 2;
        subMenuItem_four.name = '应用新建';
        subMenuItem_four.isNew = true;
        subMenuItem_four.routerLink = '/application/create';
        menuitem_three.subItem.add(subMenuItem_four);
        this.menuList.add(menuitem_three);
    };
    /**
     * 选择母菜单
     *
     * @param {MenuItem} menuItem
     *
     * @memberOf AppComponent
     */
    MenuComponent.prototype.selectMenuItem = function (menuItem, target) {
        //点击子菜单会，母菜单的click事件也会响应所以会把子菜单的响应return
        if (common_1.DataSetUtil.getDataForKey(target, 'item') === 'submenu') {
            return;
        }
        //收缩所有打开的menuitem
        for (var _i = 0, _a = this.menuList.toArray(); _i < _a.length; _i++) {
            var tempMenuItem = _a[_i];
            tempMenuItem['open'] = false;
            tempMenuItem['active'] = false;
        }
        //展开子菜单
        menuItem.active = true; //只有激活了收缩动画才有效果
        menuItem.open = true;
        //设置第一次激活的MenuItem
        if (!this.menuOptions.preActiveItem) {
            this.menuOptions.preActiveItem = menuItem;
        }
        else if (this.menuOptions.preActiveItem && !this.menuOptions.currentActiveItem) {
            this.menuOptions.currentActiveItem = menuItem;
            if (this.menuOptions.preActiveItem !== this.menuOptions.currentActiveItem) {
                this.menuOptions.preActiveItem.state = "inactive";
            }
        }
        else {
            this.menuOptions.preActiveItem = this.menuOptions.currentActiveItem;
            this.menuOptions.currentActiveItem = menuItem;
            if (this.menuOptions.preActiveItem !== this.menuOptions.currentActiveItem) {
                this.menuOptions.preActiveItem.state = "inactive";
            }
        }
        //动画切换效果
        if (menuItem['state'] === 'inactive') {
            menuItem.state = "active";
        }
        else {
            menuItem.state = "inactive";
        }
        //设置navbar 
        var navBarItem = new util_1.NavBarItem();
        navBarItem.name = menuItem.name;
        navBarItem.active = true;
        this.navBarComponent.clean();
        this.navBarComponent.setNavBarItem(navBarItem);
    };
    /**
     * 选择子菜单
     *
     * @param {MenuItem} menuItem
     *
     * @memberOf AppComponent
     */
    MenuComponent.prototype.selectSubMenuItem = function (menuItem, subMenuItem, target) {
        for (var _i = 0, _a = this.menuList.toArray(); _i < _a.length; _i++) {
            var tempMenuItem = _a[_i];
            tempMenuItem['active'] = false;
        }
        menuItem.active = true;
        if (this.menuOptions.currentActiveSubItem === this.menuOptions.preActiveSubItem && this.menuOptions.currentActiveSubItem !== undefined) {
            return;
        }
        var navBarItem = new util_1.NavBarItem();
        navBarItem.name = subMenuItem.name;
        navBarItem.active = true;
        navBarItem.routerLink = subMenuItem.routerLink;
        if (this.menuOptions.preActiveSubItem === undefined && this.menuOptions.currentActiveSubItem !== undefined) {
            this.navBarComponent.setNavBarItem(navBarItem);
        }
        else if (this.menuOptions.currentActiveSubItem !== this.menuOptions.preActiveSubItem) {
            this.navBarComponent.replaceNavBarItem(navBarItem);
        }
        this.menuOptions.currentActiveSubItem = subMenuItem;
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu-component',
            templateUrl: 'app/web/vendor/views/menu.html',
            entryComponents: [navbar_component_1.NavBarComponent],
            animations: [
                core_1.trigger('menuState', [
                    core_1.state('inactive', core_1.style({ height: 0 })),
                    core_1.state('active', core_1.style({ height: '*' })),
                    core_1.transition('inactive => active', core_1.animate('0.3s ease-in')),
                    core_1.transition('active => inactive', core_1.animate('0.3s ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [util_1.MenuOptions])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map
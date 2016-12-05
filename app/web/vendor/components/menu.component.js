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
var app_options_1 = require('../app.options');
var MenuComponent = (function () {
    function MenuComponent(menuOptions, appOptions) {
        this.menuOptions = menuOptions;
        this.appOptions = appOptions;
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
        menuitem_one.icon = 'clip-home-3';
        this.menuList.add(menuitem_one);
        var menuitem_two = new util_1.MenuItem();
        menuitem_two.index = 2;
        menuitem_two.active = false;
        menuitem_two.name = '应用管理';
        menuitem_two.open = false;
        menuitem_two.icon = 'clip-screen';
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
        subMenuItem_two.routerLink = '/application/search';
        menuitem_two.subItem.add(subMenuItem_two);
        this.menuList.add(menuitem_two);
        var menuitem_three = new util_1.MenuItem();
        menuitem_three.index = 3;
        menuitem_three.active = false;
        menuitem_three.name = '应用管理';
        menuitem_three.open = false;
        menuitem_three.icon = 'clip-screen';
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
        subMenuItem_four.routerLink = '/application/search';
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
            tempMenuItem.open = false;
            tempMenuItem.active = false;
        }
        menuItem.active = true; //只有激活了收缩动画才有效果
        //设置第一次激活的MenuItem
        if (!this.menuOptions.preActiveItem) {
            this.menuOptions.preActiveItem = menuItem;
        }
        else if (this.menuOptions.preActiveItem && !this.menuOptions.currentActiveItem) {
            this.menuOptions.currentActiveItem = menuItem;
            //收缩情况下无动画收缩展开效果
            if (this.menuOptions.preActiveItem !== this.menuOptions.currentActiveItem && this.appOptions.clipChevron === common_1.ComponentConstants.CLIP_CHEVRON_LEFT) {
                this.menuOptions.preActiveItem.state = "inactive";
            }
        }
        else {
            this.menuOptions.preActiveItem = this.menuOptions.currentActiveItem;
            this.menuOptions.currentActiveItem = menuItem;
            //收缩情况下无动画收缩展开效果
            if (this.menuOptions.preActiveItem !== this.menuOptions.currentActiveItem && this.appOptions.clipChevron === common_1.ComponentConstants.CLIP_CHEVRON_LEFT) {
                this.menuOptions.preActiveItem.state = "inactive";
            }
        }
        //动画切换效果
        if (menuItem.state === 'inactive' && this.appOptions.clipChevron === common_1.ComponentConstants.CLIP_CHEVRON_LEFT) {
            //展开子菜单
            menuItem.state = "active";
            menuItem.open = true;
        }
        else if (menuItem.state === 'active' && this.appOptions.clipChevron === common_1.ComponentConstants.CLIP_CHEVRON_LEFT) {
            //收缩子菜单
            menuItem.state = "inactive";
            menuItem.open = false;
        }
        //创建一个管理层级的navBar实体
        var navBarItem = new util_1.NavBarItem();
        navBarItem.name = menuItem.name;
        navBarItem.active = true;
        //清除设置
        this.navBarComponent.clean();
        this.menuOptions.currentActiveSubItem = undefined;
        this.menuOptions.preActiveSubItem = undefined;
        //设置navBarItem
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
            tempMenuItem.active = false;
            for (var _b = 0, _c = tempMenuItem.subItem.toArray(); _b < _c.length; _b++) {
                var tempSubMenuItem = _c[_b];
                tempSubMenuItem.selected = false;
            }
        }
        menuItem.active = true;
        subMenuItem.selected = true;
        //设置navbar
        if (this.menuOptions.currentActiveSubItem === this.menuOptions.preActiveSubItem && this.menuOptions.currentActiveSubItem !== undefined) {
            return;
        }
        var navBarItem = new util_1.NavBarItem();
        navBarItem.name = subMenuItem.name;
        navBarItem.active = true;
        navBarItem.routerLink = subMenuItem.routerLink;
        if (this.menuOptions.preActiveSubItem === undefined && this.menuOptions.currentActiveSubItem === undefined) {
            this.navBarComponent.setNavBarItem(navBarItem);
        }
        else {
            this.navBarComponent.replaceNavBarItem(navBarItem);
        }
        if (this.menuOptions.currentActiveSubItem) {
            this.menuOptions.preActiveSubItem = this.menuOptions.currentActiveSubItem;
            this.menuOptions.currentActiveSubItem = subMenuItem;
        }
        else {
            this.menuOptions.currentActiveSubItem = subMenuItem;
        }
    };
    /**
     * 收缩或打开的menuitem
     *
     * @param {boolean} isShow
     *
     * @memberOf MenuComponent
     */
    MenuComponent.prototype.showSubMenuItem = function (isShow) {
        if (isShow) {
            for (var _i = 0, _a = this.menuList.toArray(); _i < _a.length; _i++) {
                var tempMenuItem = _a[_i];
                tempMenuItem.state = 'active';
            }
        }
        else {
            for (var _b = 0, _c = this.menuList.toArray(); _b < _c.length; _b++) {
                var tempMenuItem = _c[_b];
                if (this.menuOptions.preActiveItem && !this.menuOptions.currentActiveItem && this.menuOptions.preActiveItem === tempMenuItem) {
                    continue;
                }
                else if (this.menuOptions.preActiveItem && this.menuOptions.currentActiveItem && this.menuOptions.currentActiveItem === tempMenuItem) {
                    continue;
                }
                tempMenuItem.state = 'inactive';
            }
        }
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu-component',
            templateUrl: 'app/web/vendor/views/menu.html',
            styleUrls: ['app/web/vendor/framework/compass/stylesheets/vendor.css'],
            entryComponents: [navbar_component_1.NavBarComponent],
            animations: [
                core_1.trigger('menuState', [
                    core_1.state('inactive', core_1.style({ height: 0 })),
                    core_1.state('active', core_1.style({ height: '*' })),
                    core_1.transition('inactive => active', core_1.animate('0.2s ease-in')),
                    core_1.transition('active => inactive', core_1.animate('0.2s ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [util_1.MenuOptions, app_options_1.AppOptions])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map
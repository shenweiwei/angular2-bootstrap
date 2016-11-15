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
var AppComponent = (function () {
    function AppComponent() {
        this.menuList = new util_1.ArrayList();
        this.appOptions = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        this.initClass();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.searchMenu();
    };
    /**
     * 查询menu
     *
     * @memberOf AppComponent
     */
    AppComponent.prototype.searchMenu = function () {
        this.virtualData();
    };
    /**
     * 创建虚拟数据
     *
     * @memberOf AppComponent
     */
    AppComponent.prototype.virtualData = function () {
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
    };
    AppComponent.prototype.selectMenu = function (menuItem) {
        for (var _i = 0, _a = this.menuList.toArray(); _i < _a.length; _i++) {
            var tempMenuItem = _a[_i];
            tempMenuItem['active'] = false;
            tempMenuItem['open'] = false;
        }
        menuItem.active = true;
        menuItem.open = true;
    };
    AppComponent.prototype.initClass = function () {
        this.appOptions['clipChevron'] = common_1.ComponentConstants.CLIP_CHEVRON_LEFT;
    };
    /**
     * 变更显示/隐藏 menuItem
     *
     * @memberOf AppComponent
     */
    AppComponent.prototype.changeClipChevron = function () {
        if (this.appOptions['clipChevron'] === common_1.ComponentConstants.CLIP_CHEVRON_LEFT) {
            this.appOptions['clipChevron'] = common_1.ComponentConstants.CLIP_CHEVRON_RIGHT;
        }
        else {
            this.appOptions['clipChevron'] = common_1.ComponentConstants.CLIP_CHEVRON_LEFT;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/web/views/app.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
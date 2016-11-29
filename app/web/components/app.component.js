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
var menu_component_1 = require('../vendor/components/menu.component');
var navbar_component_1 = require('../vendor/components/navbar.component');
var task_remind_component_1 = require('../vendor/components/task-remind.component');
var common_1 = require('vendor/common');
var app_options_1 = require('../vendor/app.options');
var common_2 = require('vendor/common');
var util_1 = require('vendor/util');
var AppComponent = (function () {
    function AppComponent(el, renderer, appOptions, userPojo) {
        this.appOptions = appOptions;
        this.userPojo = userPojo;
        this.virtualUserData();
    }
    /**
     * 页面显示完成做一些初始化的事情
     *
     *
     * @memberOf AppComponent
     */
    AppComponent.prototype.ngAfterViewInit = function () {
        this.menuComponent.initMenu(this.navBarComponent);
    };
    /**
     * 变更显示/隐藏 menuItem
     *
     * @memberOf AppComponent
     */
    AppComponent.prototype.changeClipChevron = function () {
        if (this.appOptions.clipChevron === common_1.ComponentConstants.CLIP_CHEVRON_LEFT) {
            this.appOptions.clipChevron = common_1.ComponentConstants.CLIP_CHEVRON_RIGHT;
            this.menuComponent.showSubMenuItem(true);
        }
        else {
            this.appOptions.clipChevron = common_1.ComponentConstants.CLIP_CHEVRON_LEFT;
            this.menuComponent.showSubMenuItem(false);
        }
    };
    /**
     * 打开系统锁屏
     *
     * @memberOf AppComponent
     */
    AppComponent.prototype.openSysLock = function () {
        this.appOptions.isOpenLock = true;
        this.appOptions.isLocked = false;
    };
    /**
     * 虚拟用户数据
     *
     * @memberOf AppComponent
     */
    AppComponent.prototype.virtualUserData = function () {
        this.userPojo.name = '虚拟用户';
        this.userPojo.type = common_1.CommonConstants.SGM;
        this.userPojo.ssoAccount = 'apptest05';
        var position_one = new common_2.PositionPojo();
        position_one.name = '财务部-应收专员';
        position_one.type = common_1.CommonConstants.SGM;
        var position_two = new common_2.PositionPojo();
        position_two.name = "系统管理员";
        position_two.type = common_1.CommonConstants.SGM;
        this.userPojo.positionList = new util_1.ArrayList().add(position_one).add(position_two);
        this.userPojo.currentPosition = position_one;
    };
    __decorate([
        core_1.ViewChild(menu_component_1.MenuComponent), 
        __metadata('design:type', menu_component_1.MenuComponent)
    ], AppComponent.prototype, "menuComponent", void 0);
    __decorate([
        core_1.ViewChild(navbar_component_1.NavBarComponent), 
        __metadata('design:type', navbar_component_1.NavBarComponent)
    ], AppComponent.prototype, "navBarComponent", void 0);
    __decorate([
        core_1.ViewChild(task_remind_component_1.TaskRemindComponent), 
        __metadata('design:type', task_remind_component_1.TaskRemindComponent)
    ], AppComponent.prototype, "taskRemindComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/web/views/app.html',
            entryComponents: [menu_component_1.MenuComponent, navbar_component_1.NavBarComponent, task_remind_component_1.TaskRemindComponent]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, app_options_1.AppOptions, common_2.UserPojo])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
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
/// Observable class extensions
require('rxjs/add/observable/of');
require('rxjs/add/observable/throw');
// Observable operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/do');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
//module
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_routes_1 = require('./app.routes');
//base component
var app_component_1 = require('./web/components/app.component');
var dashboard_component_1 = require('./web/components/dashboard.component');
//advance component
var search_component_1 = require('./web/components/application/search.component');
//vendor component
var table_component_1 = require('./web/vendor/components/table.component');
var menu_component_1 = require('./web/vendor/components/menu.component');
var navbar_component_1 = require('./web/vendor/components/navbar.component');
var task_remind_component_1 = require('./web/vendor/components/task-remind.component');
var advance_style_component_1 = require('./web/vendor/components/advance-style.component');
//vendor directives
var input_directive_1 = require('./web/vendor/directives/listener/input.directive');
//service
var http_2 = require('vendor/http');
var common_1 = require('vendor/common');
var application_service_impl_1 = require('./js/com/sgm/dms/ops/services/application.service.impl');
//扩展类
var util_1 = require('vendor/util');
var util_2 = require('vendor/util');
var util_3 = require('vendor/util');
var app_options_1 = require('./web/vendor/app.options');
var common_2 = require('vendor/common');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routes_1.routing
            ],
            //指令及组件的使用
            declarations: [
                //指令
                input_directive_1.InputListenerDirective,
                //根组件
                app_component_1.AppComponent,
                dashboard_component_1.DashBoardComponent,
                //公共组件
                table_component_1.TableComponent,
                menu_component_1.MenuComponent,
                navbar_component_1.NavBarComponent,
                task_remind_component_1.TaskRemindComponent,
                advance_style_component_1.AdvanceStyleComponent,
                //自定义组件
                search_component_1.ApplicationSearchComponent
            ],
            //提供商的注入池
            providers: [
                //公共服务
                http_2.HttpRestful,
                common_1.RestService,
                //自定义service实现类
                application_service_impl_1.ApplicationServiceImpl,
                //扩展类
                util_1.TableOptions,
                util_2.MenuOptions,
                util_3.TaskRemindOptions,
                app_options_1.AppOptions,
                common_2.UserPojo
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
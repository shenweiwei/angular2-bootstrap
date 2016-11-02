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
// Observable class extensions
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
//component
var app_component_1 = require('./web/components/app.component');
var dashboard_component_1 = require('./web/components/dashboard.component');
var demo_component_1 = require('./web/components/demo/demo.component');
//service
var http_2 = require('vendor/http');
var common_1 = require('vendor/common');
var demo_service_impl_1 = require('./js/com/sgm/dms/fol/services/demo.service.impl');
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
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashBoardComponent,
                demo_component_1.DemoComponent
            ],
            providers: [
                http_2.HttpRestful,
                common_1.RestService,
                demo_service_impl_1.DemoServiceImpl
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
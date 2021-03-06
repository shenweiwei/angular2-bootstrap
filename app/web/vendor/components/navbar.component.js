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
var NavBarComponent = (function () {
    function NavBarComponent() {
        this.navBarItemList = new util_1.ArrayList();
    }
    NavBarComponent.prototype.ngAfterViewInit = function () {
    };
    NavBarComponent.prototype.setNavBarItem = function (navBarItem) {
        this.navBarItemList.add(navBarItem);
    };
    NavBarComponent.prototype.clean = function () {
        this.navBarItemList.clean();
    };
    NavBarComponent.prototype.replaceNavBarItem = function (navBarItem) {
        this.navBarItemList.replace(navBarItem, 1);
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'navbar-component',
            /* SystemJS */
            // templateUrl: 'app/web/vendor/views/navbar.html'
            /* WebPack */
            templateUrl: '../views/navbar.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map
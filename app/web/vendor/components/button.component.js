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
var ButtonComponent = (function () {
    function ButtonComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.buttonItem = new util_1.ButtonItem();
    }
    ButtonComponent.prototype.ngAfterViewInit = function () {
        this.buttonItem.name = this.value;
        this.buttonItem.url = this.url;
        this.buttonItem.type = this.type;
        this.buttonItem.class = this.btnClass;
        this.buttonItem.url = this.url;
        this.setButtonDisabled();
    };
    ButtonComponent.prototype.setButtonDisabled = function () {
        var authorityUrls = sessionStorage.getItem('authorityUrls');
        if (common_1.StringUtil.isEmpty(authorityUrls) || this.buttonItem.type === 'reset') {
            return;
        }
        if (authorityUrls.indexOf(this.buttonItem.url) < 0) {
            this.renderer.setElementClass(this.el.nativeElement, common_1.ComponentConstants.DISABLED, true);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "btnClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "url", void 0);
    ButtonComponent = __decorate([
        core_1.Component({
            selector: 'button-component',
            templateUrl: '../views/button.html',
            styleUrls: ['../framework/compass/stylesheets/vendor.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], ButtonComponent);
    return ButtonComponent;
}());
exports.ButtonComponent = ButtonComponent;
//# sourceMappingURL=button.component.js.map
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
var ComboBoxComponent = (function () {
    function ComboBoxComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ComboBoxComponent.prototype, "label", void 0);
    ComboBoxComponent = __decorate([
        core_1.Component({
            selector: 'combobox-component',
            /* SystemJS */
            // templateUrl: 'app/web/vendor/views/combobox.html',
            // styleUrls: ['app/web/vendor/framework/compass/stylesheets/vendor.css']
            /* WebPack */
            templateUrl: '../views/combobox.html',
            styleUrls: ['../framework/compass/stylesheets/vendor.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ComboBoxComponent);
    return ComboBoxComponent;
}());
exports.ComboBoxComponent = ComboBoxComponent;
//# sourceMappingURL=combobox.component.js.map
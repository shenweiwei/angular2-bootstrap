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
var app_options_1 = require('../app.options');
var common_1 = require('vendor/common');
var AdvanceStyleComponent = (function () {
    function AdvanceStyleComponent(appOptions) {
        this.appOptions = appOptions;
    }
    AdvanceStyleComponent.prototype.openAdvanceStylePanel = function () {
        if (this.appOptions.advanceStyleState === common_1.ComponentConstants.STATE_OPEN) {
            this.appOptions.advanceStyleState = common_1.ComponentConstants.STATE_CLOSE;
            this.appOptions.advanceStyleDisplay = common_1.ComponentConstants.DISPLAY_NONE;
        }
        else {
            this.appOptions.advanceStyleState = common_1.ComponentConstants.STATE_OPEN;
            this.appOptions.advanceStyleDisplay = common_1.ComponentConstants.DISPLAY_BLOCK;
        }
    };
    AdvanceStyleComponent = __decorate([
        core_1.Component({
            selector: 'advance-style-component',
            /* SystemJS */
            // templateUrl: 'app/web/vendor/views/advance-style.html'
            /* WebPack */
            templateUrl: '../views/advance-style.html'
        }), 
        __metadata('design:paramtypes', [app_options_1.AppOptions])
    ], AdvanceStyleComponent);
    return AdvanceStyleComponent;
}());
exports.AdvanceStyleComponent = AdvanceStyleComponent;
//# sourceMappingURL=advance-style.component.js.map
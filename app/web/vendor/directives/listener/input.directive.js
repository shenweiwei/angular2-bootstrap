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
var InputListenerDirective = (function () {
    function InputListenerDirective() {
    }
    InputListenerDirective.prototype.ngOnChanges = function (changes) {
        // for (let propName in changes) {
        if (changes['value']) {
            var chng = changes['value'];
            var cur = JSON.stringify(chng.currentValue);
            var prev = JSON.stringify(chng.previousValue);
            console.log("value: currentValue = " + cur + ", previousValue = " + prev);
            this.changeCallback(chng.currentValue, chng.previousValue);
        }
        // }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InputListenerDirective.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], InputListenerDirective.prototype, "changeCallback", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], InputListenerDirective.prototype, "advanceValue", void 0);
    InputListenerDirective = __decorate([
        core_1.Directive({
            selector: '[input-listener]'
        }), 
        __metadata('design:paramtypes', [])
    ], InputListenerDirective);
    return InputListenerDirective;
}());
exports.InputListenerDirective = InputListenerDirective;
//# sourceMappingURL=input.directive.js.map
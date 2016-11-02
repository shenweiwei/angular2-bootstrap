"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var base_component_1 = require('./base.component');
var DashBoardComponent = (function (_super) {
    __extends(DashBoardComponent, _super);
    function DashBoardComponent() {
        _super.apply(this, arguments);
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    DashBoardComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/web/views/dashboard.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DashBoardComponent);
    return DashBoardComponent;
}(base_component_1.BaseComponent));
exports.DashBoardComponent = DashBoardComponent;
//# sourceMappingURL=dashboard.component.js.map
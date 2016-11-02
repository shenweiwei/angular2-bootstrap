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
var demo_vo_1 = require('../../../js/com/sgm/dms/ops/vo/demo.vo');
var base_component_1 = require('../base.component');
var demo_service_impl_1 = require('../../../js/com/sgm/dms/ops/services/demo.service.impl');
var DemoComponent = (function (_super) {
    __extends(DemoComponent, _super);
    function DemoComponent(demo_service_impl) {
        _super.call(this);
        this.demo_service_impl = demo_service_impl;
        this._params = new demo_vo_1.DemoVo;
    }
    DemoComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    DemoComponent.prototype.search = function () {
        var _this = this;
        try {
            var url = 'http://upload.saic-gm.com/web.sgm/reserve/reserveamount/query';
            this.demo_service_impl.searchReserve(url, this._params).then(function (demoVoList) { return _this._demoVoList = demoVoList; });
            console.log(this._demoVoList);
        }
        catch (exception) {
            console.error(exception);
            console.error(exception.getMessage());
        }
    };
    DemoComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/web/views/demo/demo.html'
        }), 
        __metadata('design:paramtypes', [demo_service_impl_1.DemoServiceImpl])
    ], DemoComponent);
    return DemoComponent;
}(base_component_1.BaseComponent));
exports.DemoComponent = DemoComponent;
//# sourceMappingURL=demo.component.js.map
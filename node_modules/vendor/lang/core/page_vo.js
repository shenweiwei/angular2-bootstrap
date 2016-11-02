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
var base_vo_1 = require('./base_vo');
var value_1 = require('../../annotation/value');
var PageVo = (function (_super) {
    __extends(PageVo, _super);
    function PageVo() {
        _super.call(this);
    }
    Object.defineProperty(PageVo.prototype, "beginNo", {
        get: function () {
            return this._beginNo;
        },
        set: function (beginNo) {
            this._beginNo = beginNo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageVo.prototype, "endNo", {
        get: function () {
            return this._endNo;
        },
        set: function (endNo) {
            this._endNo = endNo;
        },
        enumerable: true,
        configurable: true
    });
    PageVo.prototype.toString = function () {
        var page_vo = 'PageVo beginNo:' + this._beginNo + ',endNo:' + this._endNo;
        console.log(page_vo);
        return page_vo;
    };
    __decorate([
        value_1.value.Default(0), 
        __metadata('design:type', Number)
    ], PageVo.prototype, "_beginNo", void 0);
    __decorate([
        value_1.value.Default(10), 
        __metadata('design:type', Number)
    ], PageVo.prototype, "_endNo", void 0);
    return PageVo;
}(base_vo_1.BaseVo));
exports.PageVo = PageVo;
//# sourceMappingURL=page_vo.js.map
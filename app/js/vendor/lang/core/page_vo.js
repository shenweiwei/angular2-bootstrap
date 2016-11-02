"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_vo_1 = require('./base_vo');
var PageVo = (function (_super) {
    __extends(PageVo, _super);
    function PageVo(beginNo, endNo) {
        _super.call(this);
        this._beginNo = beginNo;
        this._endNo = endNo;
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
    return PageVo;
}(base_vo_1.BaseVo));
exports.PageVo = PageVo;
//# sourceMappingURL=page_vo.js.map
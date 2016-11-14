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
var collection_1 = require('../collection');
var value_1 = require('../../annotation/value');
var TableOptions = (function () {
    function TableOptions() {
    }
    Object.defineProperty(TableOptions.prototype, "pageNumberList", {
        get: function () {
            return this._pageNumberList;
        },
        set: function (value) {
            this._pageNumberList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableOptions.prototype, "beginPageIndex", {
        get: function () {
            return this._beginPageIndex;
        },
        set: function (value) {
            this._beginPageIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableOptions.prototype, "endPageIndex", {
        get: function () {
            return this._endPageIndex;
        },
        set: function (value) {
            this._endPageIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableOptions.prototype, "currentPageSize", {
        get: function () {
            return this._currentPageSize;
        },
        set: function (value) {
            this._currentPageSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableOptions.prototype, "currentPageNumber", {
        get: function () {
            return this._currentPageNumber;
        },
        set: function (value) {
            this._currentPageNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableOptions.prototype, "countDataSize", {
        get: function () {
            return this._countDataSize;
        },
        set: function (value) {
            this._countDataSize = value;
        },
        enumerable: true,
        configurable: true
    });
    TableOptions.prototype.getPageNumberLength = function () {
        return this._pageNumberList.getSize();
    };
    Object.defineProperty(TableOptions.prototype, "pageSizeList", {
        get: function () {
            return this._pageSizeList;
        },
        set: function (value) {
            this._pageSizeList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableOptions.prototype, "turnPagePreDisabled", {
        get: function () {
            return this._turnPagePreDisabled;
        },
        set: function (value) {
            this._turnPagePreDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableOptions.prototype, "turnPageNextDisabled", {
        get: function () {
            return this._turnPageNextDisabled;
        },
        set: function (value) {
            this._turnPageNextDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableOptions.prototype, "turnPageHomeDisabled", {
        get: function () {
            return this._turnPageHomeDisabled;
        },
        set: function (value) {
            this._turnPageHomeDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableOptions.prototype, "turnPageLastDisabled", {
        get: function () {
            return this._turnPageLastDisabled;
        },
        set: function (value) {
            this._turnPageLastDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        value_1.value.Default(new collection_1.ArrayList()), 
        __metadata('design:type', collection_1.List)
    ], TableOptions.prototype, "_pageNumberList", void 0);
    __decorate([
        value_1.value.Default(0), 
        __metadata('design:type', Number)
    ], TableOptions.prototype, "_beginPageIndex", void 0);
    __decorate([
        value_1.value.Default(0), 
        __metadata('design:type', Number)
    ], TableOptions.prototype, "_endPageIndex", void 0);
    __decorate([
        value_1.value.Default(10), 
        __metadata('design:type', Object)
    ], TableOptions.prototype, "_currentPageSize", void 0);
    __decorate([
        value_1.value.Default(1), 
        __metadata('design:type', Number)
    ], TableOptions.prototype, "_currentPageNumber", void 0);
    __decorate([
        value_1.value.Default(0), 
        __metadata('design:type', Number)
    ], TableOptions.prototype, "_countDataSize", void 0);
    __decorate([
        value_1.value.Default(new collection_1.ArrayList().add(10).add(20).add(50).add(100).add('ALL')), 
        __metadata('design:type', collection_1.List)
    ], TableOptions.prototype, "_pageSizeList", void 0);
    __decorate([
        value_1.value.Default(true), 
        __metadata('design:type', Boolean)
    ], TableOptions.prototype, "_turnPagePreDisabled", void 0);
    __decorate([
        value_1.value.Default(true), 
        __metadata('design:type', Boolean)
    ], TableOptions.prototype, "_turnPageNextDisabled", void 0);
    __decorate([
        value_1.value.Default(true), 
        __metadata('design:type', Boolean)
    ], TableOptions.prototype, "_turnPageHomeDisabled", void 0);
    __decorate([
        value_1.value.Default(true), 
        __metadata('design:type', Boolean)
    ], TableOptions.prototype, "_turnPageLastDisabled", void 0);
    return TableOptions;
}());
exports.TableOptions = TableOptions;
//# sourceMappingURL=table_options.js.map
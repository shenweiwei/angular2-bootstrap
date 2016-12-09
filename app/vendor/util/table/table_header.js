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
var index_1 = require('../../annotation/index');
var constants_1 = require('../../common/constants');
var TableHeader = (function () {
    function TableHeader() {
    }
    Object.defineProperty(TableHeader.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (value) {
            this._index = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableHeader.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableHeader.prototype, "desc", {
        get: function () {
            return this._desc;
        },
        set: function (value) {
            this._desc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableHeader.prototype, "sort", {
        get: function () {
            return this._sort;
        },
        set: function (value) {
            this._sort = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableHeader.prototype, "display", {
        get: function () {
            return this._display;
        },
        set: function (value) {
            this._display = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        index_1.value.Default(constants_1.ComponentConstants.SORT_DEFAULT), 
        __metadata('design:type', String)
    ], TableHeader.prototype, "_sort", void 0);
    __decorate([
        index_1.value.Default(constants_1.ComponentConstants.DISPLAY_BLOCK), 
        __metadata('design:type', String)
    ], TableHeader.prototype, "_display", void 0);
    return TableHeader;
}());
exports.TableHeader = TableHeader;
//# sourceMappingURL=table_header.js.map
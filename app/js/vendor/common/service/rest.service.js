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
var restful_1 = require('../../http/restful');
var util_1 = require('../../common/util');
var RestService = (function () {
    function RestService(_http_restful) {
        this._http_restful = _http_restful;
    }
    /**
     * 根據條件查找對象
     */
    RestService.prototype.findByWhere = function (url, data, callback, http_header) {
        var tempData = new Object();
        for (var key in data) {
            tempData[(key.replace('_', ''))] = data[key];
        }
        this._http_restful.doPost(url, tempData, callback, http_header);
    };
    /**
     * 根據ID查找對象
     */
    RestService.prototype.findById = function (url, key, callback, http_header) {
        var find_url = url + "/" + key;
        this._http_restful.doGet(find_url, callback, http_header);
    };
    /**
     * 查詢全部信息
     */
    RestService.prototype.findAll = function (url, callback, http_header) {
        this._http_restful.doGet(url, callback, http_header);
    };
    /**
     * 新增對象
     */
    RestService.prototype.create = function (url, data, callback, http_header) {
        var tempData = new Object();
        for (var key in data) {
            tempData[(key.replace('_', ''))] = data[key];
        }
        this._http_restful.doPut(url, tempData, callback);
    };
    /**
     * 更新對象全部屬性
     */
    RestService.prototype.update = function (url, data, key, callback, http_header) {
        var update_url = url + "/" + key;
        var tempData = new Object();
        for (var key_1 in data) {
            tempData[(key_1.replace('_', ''))] = data[key_1];
        }
        this._http_restful.doPut(update_url, tempData, callback);
    };
    /**
     * 更新對象部分内容
     */
    RestService.prototype.updateSector = function (url, data, key, callback, http_header) {
        var update_url = url + "/" + key;
        var tempData = new Object();
        for (var key_2 in data) {
            tempData[(key_2.replace('_', ''))] = data[key_2];
        }
        this._http_restful.doPatch(update_url, tempData, callback);
    };
    /**
     * 刪除某個對象
     */
    RestService.prototype.delete = function (url, key, callback, http_header) {
        var delete_url = url + "/" + key;
        this._http_restful.doDelete(delete_url, callback);
    };
    /**
     * 上傳文件
     */
    RestService.prototype.upload = function (url, data, http_header) {
        return null;
    };
    /**
     * 采用订阅者模式查询，返回一个观察者
     */
    RestService.prototype.doObservable = function (url, data, http_header) {
        if (util_1.StringUtil.isEmpty(data)) {
            data = new Object();
        }
        return null;
    };
    Object.defineProperty(RestService.prototype, "http_restful", {
        get: function () {
            return this._http_restful;
        },
        set: function (http_restful) {
            this._http_restful = http_restful;
        },
        enumerable: true,
        configurable: true
    });
    RestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [restful_1.HttpRestful])
    ], RestService);
    return RestService;
}());
exports.RestService = RestService;
//# sourceMappingURL=rest.service.js.map
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
var http_1 = require('@angular/http');
var base_1 = require('../base');
var HttpRestful = (function () {
    function HttpRestful(_http) {
        this._http = _http;
        this._http_header = new base_1.HttpHeader();
    }
    HttpRestful.prototype.setContentType = function (contentType) {
        this._http_header.setContentType(contentType);
    };
    HttpRestful.prototype.doPost = function (url, data, http_header) {
        return this._http.post(url, JSON.stringify(data), { headers: this._http_header.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HttpRestful.prototype.doGet = function (url, http_header) {
        return this._http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HttpRestful.prototype.doPut = function (url, data, http_header) {
        return this._http.put(url, JSON.stringify(data), { headers: this._http_header.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HttpRestful.prototype.doPatch = function (url, data, http_header) {
        return this._http.patch(url, JSON.stringify(data), { headers: this._http_header.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HttpRestful.prototype.doDelete = function (url, http_header) {
        return this._http.delete(url)
            .toPromise()
            .then(function (response) { return null; })
            .catch(this.handleError);
    };
    HttpRestful.prototype.doObservable = function (url, data, http_header) {
        if (data === undefined || data === null) {
            data = new Object();
        }
        return this._http.post(url, JSON.stringify(data), { headers: this._http_header.headers })
            .map(function (r) { return r.json().data; })
            .catch(this.handleError);
    };
    HttpRestful.prototype.handleError = function (error) {
        if (error.status === 0) {
            alert("请求响应错误，请检查网络");
        }
        else if (error.status === 400) {
            alert("请求报文与后台接受报文格式不一致，请稍后仔细查询");
        }
        else if (error.status === 403) {
            alert("沒有权限访问，请配置相关权限");
        }
        else if (error.status === 404) {
            alert("请求链接不存在，请联系管理员");
        }
        else if (error.status === 500) {
            var response_body = error._body;
            if (response_body.status = 500000100) {
                alert("校验异常：" + response_body.message);
            }
            else if (response_body.status = 500000200) {
                alert("后台出错：" + response_body.message);
            }
            else {
                alert("服务器出错，请稍后再试");
            }
        }
        else {
            alert("未知错误，请检查网络");
        }
        console.error('error occurred：', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HttpRestful = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpRestful);
    return HttpRestful;
}());
exports.HttpRestful = HttpRestful;
//# sourceMappingURL=http_restful.js.map
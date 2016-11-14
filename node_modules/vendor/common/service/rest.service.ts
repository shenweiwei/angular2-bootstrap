import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpRestful } from '../../http/restful';
import { HttpHeader } from '../../http/base';
import { StringUtil } from '../../common/util';

@Injectable()
export class RestService {

    constructor(private _http_restful: HttpRestful) {
    }

    /**
     * 根據條件查找對象
     */
    findByWhere(url: string, data: any, callback: Function, http_header?: HttpHeader): void {
        if (StringUtil.isEmpty(data)) {
            data = new Object();
        }

        this._http_restful.doPost(url, data, callback, http_header);
    }

    /**
     * 根據ID查找對象
     */
    findById(url: string, key: string, callback: Function, http_header?: HttpHeader): void {
        const find_url = `${url}/${key}`;
        this._http_restful.doGet(find_url, callback, http_header);
    }

    /**
     * 查詢全部信息
     */
    findAll(url: string, callback: Function, http_header?: HttpHeader): void {
        this._http_restful.doGet(url, callback, http_header);

    }

    /**
     * 新增對象
     */
    create(url: string, data: any, callback: Function, http_header?: HttpHeader): void {
        this._http_restful.doPut(url, data, callback);

    }

    /**
     * 更新對象全部屬性
     */
    update(url: string, data: any, key: string, callback: Function, http_header?: HttpHeader): void {
        const update_url = `${url}/${key}`;
        this._http_restful.doPut(update_url, data, callback);
    }

    /**
     * 更新對象部分内容
     */
    updateSector(url: string, data: any, key: string, callback: Function, http_header?: HttpHeader): void {
        const update_url = `${url}/${key}`;
        this._http_restful.doPatch(update_url, data, callback);
    }

    /**
     * 刪除某個對象
     */
    delete(url: string, key: string, callback: Function, http_header?: HttpHeader): void {
        const delete_url = `${url}/${key}`;
        this._http_restful.doDelete(delete_url, callback);
    }

    /**
     * 上傳文件
     */
    upload(url: string, data: any, http_header?: HttpHeader) {
        return null;
    }

    /**
     * 采用订阅者模式查询，返回一个观察者
     */
    doObservable(url: string, data?: any, http_header?: HttpHeader) {
        if (StringUtil.isEmpty(data)) {
            data = new Object();
        }

        return null;
    }

    set http_restful(http_restful: HttpRestful) {
        this._http_restful = http_restful;
    }

    get http_restful(): HttpRestful {
        return this._http_restful;
    }
}
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpHeader, HttpConstants } from '../base';
import { HttpRestfulRequest } from '../restful';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpRestful implements HttpRestfulRequest {
    private _http_header: HttpHeader = new HttpHeader();

    constructor(private _http: Http) { }

    setContentType(contentType: string): void {
        this._http_header.setContentType(contentType);
    }

    doPost(url: string, data: any, callback: any, http_header?: HttpHeader): any {
        this._http.post(url, JSON.stringify(data), { headers: this._http_header.headers })
            .toPromise()
            .then(response => { console.log(response.json()); typeof callback === 'function' && callback(response.json()) })
            .catch(this.handleError);
    }

    doGet(url: string, callback: Function, http_header?: HttpHeader): void {
        this._http.get(url)
            .toPromise()
            .then(response => { typeof callback === 'function' && callback(response.json()) })
            .catch(this.handleError);
    }

    doPut(url: string, data: any, callback: Function, http_header?: HttpHeader): void {
        this._http.put(url, JSON.stringify(data), { headers: this._http_header.headers })
            .toPromise()
            .then(response => { typeof callback === 'function' && callback(response.json()) })
            .catch(this.handleError);
    }

    doPatch(url: string, data: any, callback: Function, http_header?: HttpHeader): void {
        this._http.patch(url, JSON.stringify(data), { headers: this._http_header.headers })
            .toPromise()
            .then(response => { typeof callback === 'function' && callback(response.json()) })
            .catch(this.handleError);
    }

    doDelete(url: string, callback: Function, http_header?: HttpHeader): void {
        this._http.delete(url)
            .toPromise()
            .then(response => { typeof callback === 'function' && callback(response.json()) })
            .catch(this.handleError);
    }

    doObservable(url: string, data: any, callback: Function, http_header?: HttpHeader): void {
        if (data === undefined || data === null) {
            data = new Object();
        }

        // this._http.post(url, JSON.stringify(data), { headers: this._http_header.headers })
        //     .switchMap((response: Response) => { typeof callback === 'function' && callback(response.json()) })
        //     .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        if (error.status === 0) {
            alert("请求响应错误，请检查网络");
        } else if (error.status === 400) {
            alert("请求报文与后台接受报文格式不一致，请稍后仔细查询");
        } else if (error.status === 403) {
            alert("沒有权限访问，请配置相关权限");
        } else if (error.status === 404) {
            alert("请求链接不存在，请联系管理员");
        } else if (error.status === 500) {
            let response_body = error._body;

            if (response_body.status = 500000100) {
                alert("校验异常：" + response_body.message);
            } else if (response_body.status = 500000200) {
                alert("后台出错：" + response_body.message);
            } else {
                alert("服务器出错，请稍后再试");
            }

        } else {
            alert("未知错误，请检查网络");
        }

        console.error('error occurred：', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
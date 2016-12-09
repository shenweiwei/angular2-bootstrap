import { Headers } from '@angular/http';
import { HttpConstants } from './http_constants';

export class HttpHeader {
    private _headers:Headers=new Headers({'Content-Type': 'application/json'});

    public setContentType(httpContentType: string): void {
        this._headers.set('Content-Type', httpContentType);
    }

    set headers(headers:Headers){
        this._headers=headers;
    }

    get headers():Headers{
        return this._headers 
    }
}
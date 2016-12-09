import { HttpRequest, HttpHeader } from '../base';
export declare abstract class HttpRestfulRequest implements HttpRequest {
    setContentType(contentType: string): void;
    doPost(url: string, data: any, callback: Function, http_header?: HttpHeader): void;
    doGet(url: string, callback: Function, http_header?: HttpHeader): void;
    doPut(url: string, data: any, callback: Function, http_header?: HttpHeader): void;
    doDelete(url: string, callback: Function, http_header?: HttpHeader): void;
    doObservable(url: string, data: any, callback: Function, http_header?: HttpHeader): void;
}
import { HttpRequest } from '../base';
export declare abstract class HttpRestfulRequest implements HttpRequest {
    setContentType(contentType:string):void;
    doPost(url:string,data?:any):void;
    doGet(url:string):void;
    doPut(url:string,data?:any):void;
    doDelete(url:string):void;
    doObservable(url:string,data?:any):void;
}
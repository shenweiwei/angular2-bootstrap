import {BaseVo} from './base_vo';

export class PageVo extends BaseVo{
    private _beginNo: number;
    private _endNo: number;

    constructor(beginNo?:number,endNo?:number){
        super();
        this._beginNo=beginNo;
        this._endNo=endNo;
    }

    set beginNo(beginNo: number) {
        this._beginNo = beginNo;
    }

    get beginNo(): number {
        return this._beginNo;
    }

    set endNo(endNo: number) {
        this._endNo = endNo;
    }

    get endNo(): number {
        return this._endNo;
    }

    toString():String{
        let page_vo='PageVo beginNo:'+this._beginNo+',endNo:'+this._endNo;
        console.log(page_vo);
        return page_vo;
    }
}


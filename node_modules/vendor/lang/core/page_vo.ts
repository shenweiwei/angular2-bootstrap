import {BaseVo} from './base_vo';
import {value} from '../../annotation/value';

export class PageVo extends BaseVo{
    @value.Default(0)
    private _beginNo: number;
    @value.Default(10)
    private _endNo: number;

    constructor(){
        super();
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


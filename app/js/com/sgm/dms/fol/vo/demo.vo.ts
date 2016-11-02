import { PageVo } from 'vendor/lang';

export class DemoVo extends PageVo{
    private _sapCode:string;
    private _dealerName:string;
    private _dealerTypeName:string;
    private _reserveTypeName:string;
    private _totalAmount:number;
    private _frozenAmount:number;
    private _availAmount:number;

    constructor(){
        super(0,10);
    }

    set sapCode(sapCode:string){
        this._sapCode=sapCode;
    }

    get sapCode():string{
        return this._sapCode;
    }

    set dealerName(dealerName:string){
        this._dealerName=dealerName;
    }

    get dealerName():string{
        return this._dealerName;
    }

    set dealerTypeName(dealerTypeName:string){
        this._dealerTypeName=dealerTypeName;
    }

    get dealerTypeName():string{
        return this._dealerTypeName;
    }

    set reserveTypeName(reserveTypeName:string){
        this._reserveTypeName=reserveTypeName;
    }

    get reserveTypeName():string{
        return this._reserveTypeName;
    }

    set totalAmount(totalAmount:number){
        this._totalAmount=totalAmount;
    }

    get totalAmount():number{
        return this._totalAmount;
    }

    set frozenAmount(frozenAmount:number){
        this._frozenAmount=frozenAmount;
    }

    get frozenAmount():number{
        return this._frozenAmount;
    }

    set availAmount(availAmount:number){
        this._availAmount=availAmount;
    }

    get availAmount():number{
        return this._availAmount;
    }
}
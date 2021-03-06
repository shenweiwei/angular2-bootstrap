import {ClientObject} from './client_object';

export abstract class BaseVo  implements ClientObject{
    private _id: number;
    private _name: string;
    private _remark: string;
    private _valid: number;

    set id(id: number) {
        this._id = id;
    }

    get id(): number {
        return this._id;
    }

    set name(_name: string) {
        this._name = _name;
    }

    get name(): string {
        return this._name;
    }

    set remark(remark: string) {
        this._remark = remark;
    }

    get remark(): string {
        return this._remark;
    }

    set valid(valid: number) {
        this._valid = valid;
    }

    get valid(): number {
        return this._valid;
    }
}
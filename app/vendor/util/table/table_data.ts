import { ClientObject } from '../../lang/core';
import { value } from 'vendor/annotation';

export class TableData implements ClientObject {

    /**
     * 表格数据的索引号
     * 
     * @private
     * @type {number}
     * @memberOf TableData
     */
    private _index: number;

    /**
     * 是否勾选
     * 
     * @private
     * @type {boolean}
     * @memberOf TableData
     */
    @value.Default(false)
    private _checked: boolean;

    public get index(): number {
        return this._index;
    }

    public set index(value: number) {
        this._index = value;
    }

    public get checked(): boolean {
        return this._checked;
    }

    public set checked(value: boolean) {
        this._checked = value;
    }

}
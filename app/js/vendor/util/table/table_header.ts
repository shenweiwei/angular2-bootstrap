import { ClientObject } from '../../lang/core';
import { value } from '../../annotation/index';
import { ComponentConstants } from '../../common/constants';

export class TableHeader implements ClientObject {

    /**
     * 列索引
     * 
     * @private
     * @type {number}
     * @memberOf TableHeader
     */
    private _index: number;

    /**
     * 表格字段的键值
     * 
     * @private
     * @type {string}
     * @memberOf TableHeader
     */
    private _key: string;

    /**
     * 表格字段的键值对应的描述
     * 
     * @private
     * @type {string}
     * @memberOf TableHeader
     */
    private _desc: string;

    /**
     * 排序
     * 
     * @private
     * @type {number}
     * @memberOf TableHeader
     */
    @value.Default(ComponentConstants.CLIP_CHEVRON_RIGHT)
    private _sort: string;

    public get index(): number {
        return this._index;
    }

    public set index(value: number) {
        this._index = value;
    }

    public get key(): string {
        return this._key;
    }

    public set key(value: string) {
        this._key = value;
    }

    public get desc(): string {
        return this._desc;
    }

    public set desc(value: string) {
        this._desc = value;
    }

    public get sort(): string {
        return this._sort;
    }

    public set sort(value: string) {
        this._sort = value;
    }

}
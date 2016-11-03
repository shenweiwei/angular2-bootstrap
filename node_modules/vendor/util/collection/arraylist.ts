import { List } from './list';
import { ClientObject } from '../../lang/core';
import { ArrayUtil } from '../../common/util/array.util'
import { SystemException } from '../../common/exception/system.exception'

export class ArrayList<T> implements List<T>, ClientObject {
    private array: Array<any>;

    constructor() {
        this.array = [];
    }


    /**
     * 获取集合总数
     * 
     * @returns {number}
     * 
     * @memberOf ArrayList
     */
    public getSize(): number {
        if (ArrayUtil.empty(this.array)) {
            return 0;
        }

        return this.array.length;
    }


    /**
     * 转换成数组
     * 
     * @template T
     * @returns {Array<T>}
     * 
     * @memberOf ArrayList
     */
    public toArray<T>(): Array<T> {
        if (ArrayUtil.empty(this.array)) {
            throw new SystemException('current list is empty');
        }

        return this.array;
    }


    /**
     * 根据索引号获取集合中数据
     * 
     * @template T
     * @param {number} index
     * @returns {T}
     * 
     * @memberOf ArrayList
     */
    public get<T>(index: number): T {
        return this.array[index];
    }

    
    /**
     *  截取集合的数据集
     * 
     * @template T
     * @param {number} startIndex
     * @param {number} [endIndex]
     * @returns {ArrayList<T>}
     * 
     * @memberOf ArrayList
     */
    public subList<T>(startIndex: number, endIndex?: number): ArrayList<T>{
        if (!Number.isNaN(endIndex)) {
            this.array.copyWithin(0, startIndex, endIndex);
            this.array.length = endIndex - startIndex;
        } else {
            this.array.copyWithin(0, startIndex);
            this.array.length = this.array.length-startIndex;
        }
        return this;
    }


    /**
     * 往集合内添加数据
     * 
     * @template T
     * @param {T} data
     * @returns {ArrayList<T>}
     * 
     * @memberOf ArrayList
     */
    public add<T>(data: T): ArrayList<T> {
        if (ArrayUtil.empty(this.array)) {
            throw new SystemException('current list is empty');
        }
        this.array.push(data);
        return this;
    }
}
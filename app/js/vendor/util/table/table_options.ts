import { List,ArrayList } from '../collection';
import { value } from '../../annotation/value';

export class TableOptions {

    /**
     * 页数的集合
     * 
     * @private
     * @type {List<any>}
     * @memberOf TableOptions
     */
    private _pageNumberList: List<any>;

    /**
     * 页面显示数据的开始索引号
     * 
     * @private
     * @type {number}
     * @memberOf TableOptions
     */
    @value.Default(1)
    private _beginPageIndex: number;

    /**
     * 页面显示数据的结束索引号
     * 
     * @private
     * @type {number}
     * @memberOf TableOptions
     */
    @value.Default(10)
    private _endPageIndex: number;

    /**
     * 当前页面显示数据总数
     * 
     * @private
     * @type {number}
     * @memberOf TableOptions
     */
    @value.Default(10)
    private _currentPageSize: number;

    /**
     * 当前页面的页码
     * 
     * @private
     * @type {number}
     * @memberOf TableOptions
     */
    @value.Default(1)
    private _currentPageNumber: number;

    /**
     * 总数据集数量
     * 
     * @private
     * @type {number}
     * @memberOf TableOptions
     */
    private _countDataSize: number;

    /**
     * 页数的集合
     * 
     * @private
     * @type {number}
     * @memberOf TableOptions
     */
    @value.Default(new ArrayList().add(10).add(20).add(50).add(100).add('All'))
    private _pageSizeList: List<any>;

    public get pageNumberList(): List<any> {
        return this._pageNumberList;
    }

    public set pageNumberList(value: List<any>) {
        this._pageNumberList = value;
    }

    public get beginPageIndex(): number {
        return this._beginPageIndex;
    }

    public set beginPageIndex(value: number) {
        this._beginPageIndex = value;
    }

    public get endPageIndex(): number {
        return this._endPageIndex;
    }

    public set endPageIndex(value: number) {
        this._endPageIndex = value;
    }

    public get currentPageSize(): number {
        return this._currentPageSize;
    }

    public set currentPageSize(value: number) {
        this._currentPageSize = value;
    }

    public get currentPageNumber(): number {
        return this._currentPageNumber;
    }

    public set currentPageNumber(value: number) {
        this._currentPageNumber = value;
    }

    public get countDataSize(): number {
        return this._countDataSize;
    }

    public set countDataSize(value: number) {
        this._countDataSize = value;
    }

    public getPageNumberLength(): number {
        return this._pageNumberList.getSize();
    }

    public get pageSizeList(): List<number> {
        return this._pageSizeList;
    }

    public set pageSizeList(value: List<number>) {
        this._pageSizeList = value;
    }

}
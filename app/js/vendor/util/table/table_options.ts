import { List,ArrayList } from '../collection';
import { value } from '../../annotation/value';
import { ClientObject } from '../../lang/core';

export class TableOptions implements ClientObject{

    /**
     * 页数的集合
     * 
     * @private
     * @type {List<any>}
     * @memberOf TableOptions
     */
    @value.Default(new ArrayList())
    private _pageNumberList: List<any>;

    /**
     * 页面显示数据的开始索引号
     * 
     * @private
     * @type {number}
     * @memberOf TableOptions
     */
    @value.Default(0)
    private _beginPageIndex: number;

    /**
     * 页面显示数据的结束索引号
     * 
     * @private
     * @type {number}
     * @memberOf TableOptions
     */
    @value.Default(0)
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
    @value.Default(0)
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

    @value.Default(true)
    private _turnPagePreDisabled:boolean;

    @value.Default(true)
    private _turnPageNextDisabled:boolean;

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

    public get pageSizeList(): List<any> {
        return this._pageSizeList;
    }

    public set pageSizeList(value: List<any>) {
        this._pageSizeList = value;
    }

	public get turnPagePreDisabled(): boolean {
		return this._turnPagePreDisabled;
	}

	public set turnPagePreDisabled(value: boolean) {
		this._turnPagePreDisabled = value;
	}

	public get turnPageNextDisabled(): boolean {
		return this._turnPageNextDisabled;
	}

	public set turnPageNextDisabled(value: boolean) {
		this._turnPageNextDisabled = value;
	}
    
}
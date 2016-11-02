export class TableData {
    
    /**
     * 表格数据的索引号
     * 
     * @private
     * @type {number}
     * @memberOf TableData
     */
    private _index:number;

	public get index(): number {
		return this._index;
	}

	public set index(value: number) {
		this._index = value;
	}
    
}
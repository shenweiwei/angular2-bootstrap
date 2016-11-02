export class TableHeader{
    
    /**
     * 表格字段的键值
     * 
     * @private
     * @type {string}
     * @memberOf TableHeader
     */
    private _key:string;
    
    /**
     * 表格字段的键值对应的描述
     * 
     * @private
     * @type {string}
     * @memberOf TableHeader
     */
    private _desc:string;

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
    
}
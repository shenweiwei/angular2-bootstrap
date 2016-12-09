export class ButtonItem{
    private _name:string;
    private _url:string;
	private _type:string;
	private _class:string;

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

	public get url(): string {
		return this._url;
	}

	public set url(value: string) {
		this._url = value;
	}

	public get type(): string {
		return this._type;
	}

	public set type(value: string) {
		this._type = value;
	}

	public get class(): string {
		return this._class;
	}

	public set class(value: string) {
		this._class = value;
	}
	
}
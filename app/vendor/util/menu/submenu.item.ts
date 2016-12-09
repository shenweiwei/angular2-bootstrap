export class SubMenuItem {
	private _name: string;
	private _index: number;
	private _isNew: boolean;
	private _routerLink: string;
	private _selected: boolean=false;

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

	public get index(): number {
		return this._index;
	}

	public set index(value: number) {
		this._index = value;
	}

	public get isNew(): boolean {
		return this._isNew;
	}

	public set isNew(value: boolean) {
		this._isNew = value;
	}

	public get routerLink(): string {
		return this._routerLink;
	}

	public set routerLink(value: string) {
		this._routerLink = value;
	}

	public get selected(): boolean {
		return this._selected;
	}

	public set selected(value: boolean) {
		this._selected = value;
	}

}
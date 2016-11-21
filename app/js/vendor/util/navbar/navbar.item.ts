export class NavBarItem{
    private _index:number;
    private _active:boolean;
    private _routerLink:string;
	private _name:string;

	public get index(): number {
		return this._index;
	}

	public set index(value: number) {
		this._index = value;
	}

	public get active(): boolean {
		return this._active;
	}

	public set active(value: boolean) {
		this._active = value;
	}

	public get routerLink(): string {
		return this._routerLink;
	}

	public set routerLink(value: string) {
		this._routerLink = value;
	}

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}
    
}
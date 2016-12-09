export class PositionPojo{
    private _name:string;
    private _type:number;

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

	public get type(): number {
		return this._type;
	}

	public set type(value: number) {
		this._type = value;
	}
    
}
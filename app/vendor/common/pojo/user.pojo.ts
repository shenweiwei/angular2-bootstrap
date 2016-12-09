import { List } from '../../util/collection';
import { PositionPojo } from './position.pojo';

export class UserPojo {
	private _name: string;
	private _ssoAccount: String;
	private _type: number;
	private _positionList: List<PositionPojo>;
	private _currentPosition: PositionPojo;

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

	public get ssoAccount(): String {
		return this._ssoAccount;
	}

	public set ssoAccount(value: String) {
		this._ssoAccount = value;
	}

	public get type(): number {
		return this._type;
	}

	public set type(value: number) {
		this._type = value;
	}

	public get positionList(): List<PositionPojo> {
		return this._positionList;
	}

	public set positionList(value: List<PositionPojo>) {
		this._positionList = value;
	}

	public get currentPosition(): PositionPojo {
		return this._currentPosition;
	}

	public set currentPosition(value: PositionPojo) {
		this._currentPosition = value;
	}

}
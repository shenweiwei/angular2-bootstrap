import {PageVo} from 'vendor/lang';

export class ApplicationVo extends PageVo{
    private _appId:number;
    private _appChnName:string;
    private _appEngName:string;
    private _appOwner:string;
    private _appStatus:string;

	public get appId(): number {
		return this._appId;
	}

	public set appId(value: number) {
		this._appId = value;
	}

	public get appChnName(): string {
		return this._appChnName;
	}

	public set appChnName(value: string) {
		this._appChnName = value;
	}

	public get appEngName(): string {
		return this._appEngName;
	}

	public set appEngName(value: string) {
		this._appEngName = value;
	}

	public get appOwner(): string {
		return this._appOwner;
	}

	public set appOwner(value: string) {
		this._appOwner = value;
	}

	public get appStatus(): string {
		return this._appStatus;
	}

	public set appStatus(value: string) {
		this._appStatus = value;
	}
}
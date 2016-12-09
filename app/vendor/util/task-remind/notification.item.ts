export class NotificationItem {
    private _icon: string;//图标
    private _desc: string;//提醒描述
    private _operateLevel: string;//操作级别
    private _operateTime: string;//操作时间

	public get icon(): string {
		return this._icon;
	}

	public set icon(value: string) {
		this._icon = value;
	}

	public get desc(): string {
		return this._desc;
	}

	public set desc(value: string) {
		this._desc = value;
	}

	public get operateLevel(): string {
		return this._operateLevel;
	}

	public set operateLevel(value: string) {
		this._operateLevel = value;
	}

	public get operateTime(): string {
		return this._operateTime;
	}

	public set operateTime(value: string) {
		this._operateTime = value;
	}
    
}
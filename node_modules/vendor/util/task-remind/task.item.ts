export class TaskItem {
    private _isDone: boolean;//是否完成
    private _desc: string;//任务描述
    private _pendingLevel: string;//任务等级
    private _pendingLevelOfDay: string;//任务执行在哪一天

    public get isDone(): boolean {
        return this._isDone;
    }

    public set isDone(value: boolean) {
        this._isDone = value;
    }

    public get desc(): string {
        return this._desc;
    }

    public set desc(value: string) {
        this._desc = value;
    }

    public get pendingLevel(): string {
        return this._pendingLevel;
    }

    public set pendingLevel(value: string) {
        this._pendingLevel = value;
    }

	public get pendingLevelOfDay(): string {
		return this._pendingLevelOfDay;
	}

	public set pendingLevelOfDay(value: string) {
		this._pendingLevelOfDay = value;
	}

}
export class MessageItem{
    private _message:string;
    private _messageTime:string;
    private _userName:string;
    private _userPicUrl:string;

	public get message(): string {
		return this._message;
	}

	public set message(value: string) {
		this._message = value;
	}

	public get messageTime(): string {
		return this._messageTime;
	}

	public set messageTime(value: string) {
		this._messageTime = value;
	}

	public get userName(): string {
		return this._userName;
	}

	public set userName(value: string) {
		this._userName = value;
	}

	public get userPicUrl(): string {
		return this._userPicUrl;
	}

	public set userPicUrl(value: string) {
		this._userPicUrl = value;
	}
    
}
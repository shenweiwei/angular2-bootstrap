import { value } from 'vendor/annotation';
import { ComponentConstants } from 'vendor/common';

export class AppOptions {
    @value.Default(true)
    private _isOpenLock: boolean;
    @value.Default(false)
    private _isLocked: boolean;
    @value.Default(ComponentConstants.CLIP_CHEVRON_LEFT)
    private _clipChevron:string;

	public get isOpenLock(): boolean {
		return this._isOpenLock;
	}

	public set isOpenLock(value: boolean) {
		this._isOpenLock = value;
	}

	public get isLocked(): boolean {
		return this._isLocked;
	}

	public set isLocked(value: boolean) {
		this._isLocked = value;
	}
    
	public get clipChevron(): string {
		return this._clipChevron;
	}

	public set clipChevron(value: string) {
		this._clipChevron = value;
	}
    
}
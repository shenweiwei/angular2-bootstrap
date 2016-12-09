import { value } from 'vendor/annotation';
import { ComponentConstants } from 'vendor/common';

export class AppOptions {
	@value.Default(true)
	private _isOpenLock: boolean;
	@value.Default(false)
	private _isLocked: boolean;
	@value.Default(ComponentConstants.CLIP_CHEVRON_LEFT)
	private _clipChevron: string;
	@value.Default(false)
	private _openSelectPosition: boolean;
	@value.Default(ComponentConstants.STATE_CLOSE)
	private _advanceStyleState: string;
	@value.Default(ComponentConstants.DISPLAY_NONE)
	private _advanceStyleDisplay: string;
	@value.Default(false)
	private _isAlert: boolean;
	@value.Default(false)
	private _isConfirm: boolean;

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

	public get openSelectPosition(): boolean {
		return this._openSelectPosition;
	}

	public set openSelectPosition(value: boolean) {
		this._openSelectPosition = value;
	}

	public get advanceStyleState(): string {
		return this._advanceStyleState;
	}

	public set advanceStyleState(value: string) {
		this._advanceStyleState = value;
	}

	public get advanceStyleDisplay(): string {
		return this._advanceStyleDisplay;
	}

	public set advanceStyleDisplay(value: string) {
		this._advanceStyleDisplay = value;
	}

	public get isAlert(): boolean {
		return this._isAlert;
	}

	public set isAlert(value: boolean) {
		this._isAlert = value;
	}

	public get isConfirm(): boolean {
		return this._isConfirm;
	}

	public set isConfirm(value: boolean) {
		this._isConfirm = value;
	}

}
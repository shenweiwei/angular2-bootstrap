import { value } from 'vendor/annotation';
import { ArrayList } from 'vendor/util';

export class TaskRemindOptions {
	@value.Default(new Map<String, String>().set('danger', 'label-danger').set('warning', 'label-warning').set('success', 'label-success').set('info', 'label-info').set('primary', 'label-primary'))
	private _level: Map<String, String>;
	@value.Default(new Map<String, String>().set('user', 'fa-user').set('comment', 'fa-comment').set('shoppingCart', 'fa-shopping-cart'))
	private _icon: Map<String, String>;

	public get level(): Map<String, String> {
		return this._level;
	}

	public set level(value: Map<String, String>) {
		this._level = value;
	}

	public get icon(): Map<String, String> {
		return this._icon;
	}

	public set icon(value: Map<String, String>) {
		this._icon = value;
	}
	
}
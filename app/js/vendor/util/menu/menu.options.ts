import { MenuItem } from './menu.item'
import { SubMenuItem } from './submenu.item';

export class MenuOptions {
	private _preActiveItem: MenuItem;
	private _currentActiveItem: MenuItem;
	private _preActiveSubItem: SubMenuItem;
	private _currentActiveSubItem: SubMenuItem;

	public get preActiveItem(): MenuItem {
		return this._preActiveItem;
	}

	public set preActiveItem(value: MenuItem) {
		this._preActiveItem = value;
	}

	public get currentActiveItem(): MenuItem {
		return this._currentActiveItem;
	}

	public set currentActiveItem(value: MenuItem) {
		this._currentActiveItem = value;
	}
	
	public get preActiveSubItem(): SubMenuItem {
		return this._preActiveSubItem;
	}

	public set preActiveSubItem(value: SubMenuItem) {
		this._preActiveSubItem = value;
	}

	public get currentActiveSubItem(): SubMenuItem {
		return this._currentActiveSubItem;
	}

	public set currentActiveSubItem(value: SubMenuItem) {
		this._currentActiveSubItem = value;
	}
}
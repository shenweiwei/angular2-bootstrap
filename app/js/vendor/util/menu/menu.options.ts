import { MenuItem } from './menu.item'

export class MenuOptions {
    private _preActiveItem: MenuItem;
    private _currentActiveItem: MenuItem;

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
    
}
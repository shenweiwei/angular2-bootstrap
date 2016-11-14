import { SubMenuItem } from './submenu.item';
import { List } from '../../util/collection/list';

export class MenuItem {
    private _subItem: List<SubMenuItem>;
    private _active: boolean;
    private _index: number;
    private _name: string;
    private _open: boolean;

    public get subItem(): List<SubMenuItem> {
        return this._subItem;
    }

    public set subItem(value: List<SubMenuItem>) {
        this._subItem = value;
    }

    public get active(): boolean {
        return this._active;
    }

    public set active(value: boolean) {
        this._active = value;
    }

    public get index(): number {
        return this._index;
    }

    public set index(value: number) {
        this._index = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get open(): boolean {
        return this._open;
    }

    public set open(value: boolean) {
        this._open = value;
    }

}
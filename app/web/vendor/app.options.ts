import { value } from 'vendor/annotation';

export class AppOptions {
    @value.Default(true)
    private _isOpenLock: boolean;
    @value.Default(false)
    private _isLocked: boolean;
}
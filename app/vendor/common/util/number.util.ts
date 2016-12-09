export class NumberUtil {
    static isNullOrZone(value: number): boolean {
        if (!(value === undefined || value === null || value === 0)) {
            return false;
        }

        return true;
    }
}
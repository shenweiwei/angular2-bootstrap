export class ArrayUtil {
    static isEmpty<T>(array: Array<T>): boolean {
        if (!(array === undefined || array === null)) {
            return false;
        } else if (array.length > 0) {
            return false;
        }

        return true;
    }

    static getSize<T>(array: Array<T>): number {
        if (this.isEmpty(array)) {
            return 0;
        }

        return array.length;
    }
}
export class DataSetUtil {
    static getDataForKey<T>(target: T, key: string): T {
        return target['dataset'][key];
    }
}
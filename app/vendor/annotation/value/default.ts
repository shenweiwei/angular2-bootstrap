export namespace value {

    /**
     * 初始化默认值
     * 
     * @export
     * @template T
     * @param {T} value
     * @returns
     */
    export function Default<T>(value: T) {
        return (target: any, key: string) => {
            target[key] = value;
        }
    }
}
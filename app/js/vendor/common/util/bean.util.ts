export class BeanUtil {
    static clone<T>(target: T, source: T): void {
        let originProto = Object.getPrototypeOf(source);
        target = Object.assign(Object.create(originProto), source);
    }
}
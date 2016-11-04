export class BeanUtil {
    static clone<T>(source: T): T {
        let originProto = Object.getPrototypeOf(source);
        return Object.assign(Object.create(originProto), source);
    }
}
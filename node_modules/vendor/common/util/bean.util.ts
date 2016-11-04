export class BeanUtil {
    static clone<T>(source: T, target?: T): T {
        let originProto = Object.getPrototypeOf(source);
        target = Object.assign(Object.create(originProto), source)
        return target;
    }
}
import { List, ArrayList } from '../../util/collection'
export class BeanUtil {
    static clone<T>(source: T, target?: T): T {
        let originProto = Object.getPrototypeOf(source);
        let newTarget = (<any>Object).assign(Object.create(originProto), source);
        //如果是List集合
        if (target instanceof ArrayList && source instanceof ArrayList) {
            target.addAll(source.toArray());
        }

        return newTarget;
    }
    static isEmpty(target: any): boolean {
        if (!(target === undefined || target === null)) {
            return false;
        }
        return true;
    }
}
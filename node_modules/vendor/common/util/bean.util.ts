import { List, ArrayList } from '../../util/collection'
export class BeanUtil {
    static clone<T>(source: T, target?: T): T {
        let originProto = Object.getPrototypeOf(source);
        let newTarget = Object.assign(Object.create(originProto), source);
        //如果是List集合
        if (target instanceof ArrayList && source instanceof ArrayList) {
            const array = source.toArray();
            let arrayProto = Object.getPrototypeOf(array);
            newTarget = Object.assign(Object.create(arrayProto), array);
            target.addAll(newTarget);
        }
        
        return newTarget;
    }
}
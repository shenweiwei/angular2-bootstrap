import { Collection } from './collection';
import { ArrayList } from './arraylist';

export declare abstract class List<T> implements Collection {
    getSize(): number;
    toArray<T>(): Array<T>;
    get<T>(index: number): T;
    subList<T>(startIndex: number, endIndex?: number): ArrayList<T>;
    add<T>(data: T): ArrayList<T>;
}
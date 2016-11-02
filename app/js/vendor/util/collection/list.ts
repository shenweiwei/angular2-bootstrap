import { Collection } from './collection'

export declare abstract class List<T> implements Collection {
    getSize(): number;
    toArray<T>(): Array<T>;
    get<T>(index: number): T;
    subList<T>(startIndex: number, endIndex?: number): Array<T>;
}
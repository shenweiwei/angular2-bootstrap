import "reflect-metadata";

export module Log {

    export function type(target: any, key: string) {
        const type = Reflect.getMetadata("design:type", target, key);
        console.log(`${key} type: ${type.name}`);
    }

    export function paramtypes(target: any, key: string) {
        const types = Reflect.getMetadata("design:paramtypes", target, key);
        var s = types.map((a: any) => a.name).join();
        console.log(`${key} param types: ${s}`);
    }

    export function properties(target: any) {
        console.log(target);
        const properties = Reflect.getMetadata("design:properties", target);
        console.log(properties);
        // console.log(`${key} return type: ${return_type.name}`);
    }
}
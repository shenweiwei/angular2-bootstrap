export class StringUtil {
    static isEmpty(data: string): boolean {
        if (!(data === undefined || data === null || data === '')) {
            return false;
        }

        return true;
    }

     static isNull(data: string): boolean {
        if (!(data === undefined || data === null )) {
            return false;
        }

        return true;
    }

    static toUpperCase(data: string): string {
        if (this.isEmpty(data)) {
            return;
        }

        return data.toUpperCase();
    }

    static toLowerCase(data: string): string {
        if (this.isEmpty(data)) {
            return;
        }

        return data.toLowerCase();
    }
}
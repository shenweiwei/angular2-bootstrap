export class StringUtil {
    static empty(data: string): boolean {
        if (!(data === undefined || data === null || data === '')) {
            return false;
        }

        return true;
    }

    static toUpperCase(data: string): string {
        if (this.empty(data)) {
            return;
        }

        return data.toUpperCase();
    }

    static toLowerCase(data: string): string {
        if (this.empty(data)) {
            return;
        }

        return data.toLowerCase();
    }
}
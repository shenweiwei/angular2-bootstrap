export class SystemException implements Error {
    public name: string = 'SystemException';
    public message: string;

    constructor(_message: string) {
        this.message = _message;
    }

    getMessage(): string {
        return this.name + ':' + this.message;
    }
}
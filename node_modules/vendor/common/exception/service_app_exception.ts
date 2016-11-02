export class ServiceAppException implements Error {
    public name: string = 'ServiceAppException';
    public message: string;

    constructor(_message: string) {
        this.message = _message;
    }

    getMessage(): string {
        return this.name + ':' + this.message;
    }
}
export class ComponentException implements Error {
    public name: string = 'ComponentException';
    public message: string;

    constructor(_message: string) {
        this.message = _message;
    }

    getMessage(): string {
        return this.name + ':' + this.message;
    }
}
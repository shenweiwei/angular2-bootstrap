import { ServiceAppException } from './service_app.exception';

export class ServiceBizException extends ServiceAppException {
    public name: string = 'ServiceBizException';
    public message: string;

    constructor(_message: string) {
        super(_message);
        this.message = _message;
    }

    getMessage(): string {
        return this.name + ':' + this.message;
    }
}
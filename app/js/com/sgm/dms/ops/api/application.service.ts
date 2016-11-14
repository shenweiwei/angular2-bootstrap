import { ApplicationVo } from '../vo/application.vo';
import { List } from 'vendor/util';

export interface ApplicationService {
    searchApplication(url: string, data: any, callback: Function): void;
}
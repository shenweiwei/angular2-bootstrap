import { Injectable } from '@angular/core';
import { RestService } from 'vendor/common';
import { List } from 'vendor/util';

import { ApplicationService } from '../api/application.service';
import { ApplicationVo } from '../vo/application.vo';

@Injectable()
export class ApplicationServiceImpl implements ApplicationService {
    constructor(private rest_service: RestService) { }

    searchApplication(url: string, data: any, callback: Function): void {
        this.rest_service.findByWhere(url, data, callback);
    }
}
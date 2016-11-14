import { Injectable } from '@angular/core';
import { RestService } from 'vendor/common';
import { DemoService } from '../api/demo.service';

@Injectable()
export class DemoServiceImpl implements DemoService {

    constructor(private rest_service: RestService) { }

    searchReserve(url: string, data: any): Promise<any[]> {
        const response = this.rest_service.findByWhere(url, data, () => {

        });
        console.log(response);
        return response;
    }
}
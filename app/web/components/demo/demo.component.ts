import { Component, Input, OnInit } from '@angular/core';
import { DemoVo } from '../../../js/com/sgm/dms/ops/vo/demo.vo';
import { PageVo } from 'vendor/lang';
import { ComponentException } from 'vendor/common';
import { BaseComponent } from '../base.component';
import { DemoServiceImpl } from '../../../js/com/sgm/dms/ops/services/demo.service.impl';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: 'app/web/views/demo/demo.html'
})

export class DemoComponent extends BaseComponent implements OnInit {
    public _demoVoList: DemoVo[];
    public _params: DemoVo = new DemoVo;

    constructor(private demo_service_impl: DemoServiceImpl) {
        super();
    }

    ngOnInit(): void {
        super.ngOnInit();
    }

    search(): void {
        try {
            let url = 'web.dmsops/application/query';
            this.demo_service_impl.searchReserve(url, this._params).then(demoVoList => this._demoVoList = demoVoList);
            console.log(this._demoVoList);

            // throw new ComponentException('error');
        } catch (exception) {
            console.error(exception);
            console.error(exception.getMessage());
        }
    }
}
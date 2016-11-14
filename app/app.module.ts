/// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

//module
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routes';

//base component
import { AppComponent } from './web/components/app.component';
import { DashBoardComponent } from './web/components/dashboard.component';

//advance component
import { ApplicationSearchComponent } from './web/components/application/search.component';

//vendor component
import { TableComponent } from './web/vendor/components/table.component';

//vendor directives
import { InputListenerDirective } from './web/vendor/directives/listener/input.directive'

//service
import { HttpRestful } from 'vendor/http';
import { RestService } from 'vendor/common';
import { ApplicationServiceImpl } from './js/com/sgm/dms/ops/services/application.service.impl';

//扩展类
import { TableOptions } from 'vendor/util';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  //指令及组件的使用
  declarations: [
    //指令
    InputListenerDirective,

    //组件
    AppComponent,
    DashBoardComponent,
    ApplicationSearchComponent,
    TableComponent
  ],
  //提供商的注入池
  providers: [
    HttpRestful,
    RestService,
    //自定义service实现类
    ApplicationServiceImpl,
    //扩展类
    TableOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
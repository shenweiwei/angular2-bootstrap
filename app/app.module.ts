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

// //vendor component
import { BaseComponent } from './web/vendor/components/base.component';
import { TableComponent } from './web/vendor/components/table.component';
import { ButtonComponent } from './web/vendor/components/button.component';
import { MenuComponent } from './web/vendor/components/menu.component';
import { NavBarComponent } from './web/vendor/components/navbar.component';
import { TaskRemindComponent } from './web/vendor/components/task-remind.component';
import { AdvanceStyleComponent } from './web/vendor/components/advance-style.component';

// //vendor directives
import { InputListenerDirective } from './web/vendor/directives/listener/input.directive'

//service
import { HttpRestful } from 'vendor/http';
import { RestService } from 'vendor/common';
import { ApplicationServiceImpl } from './js/com/sgm/dms/ops/services/application.service.impl';

//扩展类
import { AppOptions } from './web/vendor/app.options';
import { UserPojo } from 'vendor/common';
import { TableOptions,MenuOptions,TaskRemindOptions,ExcelFile,WordFile,CSVFile } from 'vendor/util';

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

    //根组件
    AppComponent,
    DashBoardComponent,
    //公共组件
    ButtonComponent,
    TableComponent,
    MenuComponent,
    NavBarComponent,
    TaskRemindComponent,
    AdvanceStyleComponent,

    // //自定义组件
    ApplicationSearchComponent
  ],
  //提供商的注入池
  providers: [
    // 公共服务
    HttpRestful,
    RestService,
    //自定义service实现类
    ApplicationServiceImpl,
    //扩展类
    BaseComponent,
    TableOptions,
    MenuOptions,
    TaskRemindOptions,
    AppOptions,
    UserPojo,
    ExcelFile,
    WordFile,
    CSVFile
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
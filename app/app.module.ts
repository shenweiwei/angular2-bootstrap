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
import { DemoComponent } from './web/components/demo/demo.component';
import { ApplicationSearch } from './web/components/application/search.component';

//vendor component
import { TableComponent } from './web/vendor/components/table.component';

//service
import { HttpRestful } from 'vendor/http';
import { RestService } from 'vendor/common';
import { DemoServiceImpl } from './js/com/sgm/dms/fol/services/demo.service.impl';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashBoardComponent,
    DemoComponent,
    ApplicationSearch,
    TableComponent
  ],
  providers: [
    HttpRestful,
    RestService,
    DemoServiceImpl
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
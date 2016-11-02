import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componet
import { AppComponent } from './web/components/app.component';
import { DashBoardComponent } from './web/components/dashboard.component';
import { DemoComponent } from './web/components/demo/demo.component';
import {ApplicationSearch} from './web/components/application/search.component'

const appRoutes: Routes = [
    {
        path: 'showDemo',
        component: DemoComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashBoardComponent
    },
    {
        path: 'application/search',
        component: ApplicationSearch
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
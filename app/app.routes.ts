import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './web/components/app.component';
import { DashBoardComponent } from './web/components/dashboard.component';
import { DemoComponent } from './web/components/demo/demo.component';

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
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
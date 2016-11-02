"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./web/components/dashboard.component');
var demo_component_1 = require('./web/components/demo/demo.component');
var search_component_1 = require('./web/components/application/search.component');
var appRoutes = [
    {
        path: 'showDemo',
        component: demo_component_1.DemoComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashBoardComponent
    },
    {
        path: 'application/search',
        component: search_component_1.ApplicationSearch
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map
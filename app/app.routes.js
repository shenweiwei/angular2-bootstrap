"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./web/components/dashboard.component');
var search_component_1 = require('./web/components/application/search.component');
var appRoutes = [
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
        component: search_component_1.ApplicationSearchComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map
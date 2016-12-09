"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// Angular
require('@angular/platform-browser');
require('@angular/platform-browser-dynamic');
require('@angular/core');
require('@angular/common');
require('@angular/http');
require('@angular/router');
// RxJS
require('rxjs');
// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...
__export(require('./lang/index'));
__export(require('./system/console'));
__export(require('./interceptor/proxy'));
__export(require('./http/index'));
__export(require('./common/index'));
__export(require('./annotation/index'));
__export(require('./util/index'));
//# sourceMappingURL=vendor.js.map
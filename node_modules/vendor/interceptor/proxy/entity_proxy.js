/**
 * 這是實體對象的Proxy
 */
"use strict";
var proxy;
(function (proxy) {
    var EntityProxy = (function () {
        function EntityProxy() {
            console.log(33);
        }
        return EntityProxy;
    }());
    proxy.EntityProxy = EntityProxy;
})(proxy = exports.proxy || (exports.proxy = {}));
//# sourceMappingURL=entity_proxy.js.map
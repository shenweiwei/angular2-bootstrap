"use strict";
var ViewComponent = (function () {
    function ViewComponent() {
    }
    ViewComponent.prototype.ngOnInit = function () {
        Main.init();
        UIModals.init();
    };
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=view.component.js.map
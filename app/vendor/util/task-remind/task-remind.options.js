"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var annotation_1 = require('vendor/annotation');
var TaskRemindOptions = (function () {
    function TaskRemindOptions() {
    }
    Object.defineProperty(TaskRemindOptions.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (value) {
            this._level = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskRemindOptions.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (value) {
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        annotation_1.value.Default(new Map().set('danger', 'label-danger').set('warning', 'label-warning').set('success', 'label-success').set('info', 'label-info').set('primary', 'label-primary')), 
        __metadata('design:type', Map)
    ], TaskRemindOptions.prototype, "_level", void 0);
    __decorate([
        annotation_1.value.Default(new Map().set('user', 'fa-user').set('comment', 'fa-comment').set('shoppingCart', 'fa-shopping-cart')), 
        __metadata('design:type', Map)
    ], TaskRemindOptions.prototype, "_icon", void 0);
    return TaskRemindOptions;
}());
exports.TaskRemindOptions = TaskRemindOptions;
//# sourceMappingURL=task-remind.options.js.map
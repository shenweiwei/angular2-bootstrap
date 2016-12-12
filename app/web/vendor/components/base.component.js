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
var core_1 = require('@angular/core');
var BaseComponent = (function () {
    function BaseComponent() {
    }
    /**
     * 打开进度条
     *
     * @memberOf BaseComponent
     */
    BaseComponent.prototype.openProgress = function () {
        $('body').modalmanager('loading');
    };
    /**
     * 关闭进度条
     *
     * @memberOf BaseComponent
     */
    BaseComponent.prototype.closeProgress = function () {
        this.modalManager = this.modalManager || $("body").data("modalmanager");
        this.openModals = this.openModals || this.openModals.getOpenModals();
        this.modalManager.removeLoading();
    };
    /**
     * 弹出提示
     *
     * @param {string} title
     * @param {string} message
     *
     * @memberOf BaseComponent
     */
    BaseComponent.prototype.alert = function (title, message) {
        this.title = title;
        this.message = message;
        this.alertTemplate(title, message);
        $("body").append("<a id='alertPanel' href='#alert' data-toggle='modal' role='button' style='visibility:hidden'></a>");
        $('#alertPanel').click();
        $('#alertPanel').remove();
    };
    /**
     * 弹出confirm
     *
     * @param {string} title
     * @param {string} message
     *
     * @memberOf BaseComponent
     */
    BaseComponent.prototype.confirm = function (title, message, callback) {
        this.title = title;
        this.message = message;
        this.confirmTemplate(title, message, callback);
        $("body").append("<a id='confirmPanel' href='#confirm' data-toggle='modal' role='button' style='visibility:hidden'></a>");
        $('#confirmPanel').click();
        $('#confirmPanel').remove();
    };
    BaseComponent.prototype.alertTemplate = function (title, message) {
        var template = '<article class="modal fade" id="alert" tabindex="-1" role="alert" aria-hidden="true">'
            .concat('<div class="modal-content">')
            .concat('<div class="modal-header">')
            .concat('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times; </button>')
            .concat('<h4 class="modal-title" style="color:#364f6a"> ')
            .concat(title)
            .concat('</h4>')
            .concat('</div>')
            .concat('<div class="modal-body text-center">')
            .concat('<p class="muted" style="font-size:medium">')
            .concat(message)
            .concat('</p>')
            .concat('</div>')
            .concat('<div class="modal-footer">')
            .concat('<button class="btn btn-default" data-dismiss="modal"> 确定 </button>')
            .concat('</div>')
            .concat('</div>')
            .concat('</article>');
        $('body').append(template);
    };
    BaseComponent.prototype.confirmTemplate = function (title, message, callback) {
        var template = '<article class="modal fade" id="confirm" tabindex="-1" role="confirm" aria-hidden="true">'
            .concat('<div class="modal-content">')
            .concat('<div class="modal-header">')
            .concat('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>')
            .concat('<h4 class="modal-title" style="color:#364f6a">')
            .concat(title)
            .concat('</h4>')
            .concat('</div>')
            .concat('<div class="modal-body text-center">')
            .concat('<p class="muted" style="font-size:medium">')
            .concat(message)
            .concat('</p>')
            .concat('</div>')
            .concat('<div class="modal-footer">')
            .concat('<button aria-hidden="true" data-dismiss="modal" class="btn btn-default">取消</button>')
            .concat('<button id="confirmSuccess" class="btn btn-default" click="">确定</button>')
            .concat('</div>')
            .concat('</div>')
            .concat('</article>');
        $('body').append(template);
        $('body').on('click', '#confirmSuccess', function () {
            callback();
        });
    };
    BaseComponent = __decorate([
        core_1.Component({
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], BaseComponent);
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map
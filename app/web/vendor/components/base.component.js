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
     * @param {string} message
     * @param {string} title
     *
     * @memberOf BaseComponent
     */
    BaseComponent.prototype.alert = function (message, title) {
        this.message = message;
        this.title = title;
        this.alertTemplate(message, title);
        $("body").append("<a id='alertPanel' href='#alert' data-toggle='modal' role='button' style='visibility:hidden'></a>");
        $('#alertPanel').click();
        $('#alertPanel').remove();
    };
    /**
     * 弹出confirm
     *
     * @param {string} message
     * @param {string} title
     *
     * @memberOf BaseComponent
     */
    BaseComponent.prototype.confirm = function (message, title, callback) {
        this.message = message;
        this.title = title;
        this.confirmTemplate(message, title, callback);
        $("body").append("<a id='confirmPanel' href='#confirm' data-toggle='modal' role='button' style='visibility:hidden'></a>");
        $('#confirmPanel').click();
        $('#confirmPanel').remove();
    };
    BaseComponent.prototype.alertTemplate = function (message, title) {
        var template = '<article class="modal fade" id="alert" tabindex="-1" role="alert" aria-hidden="true">';
        template = template.concat('<div class="modal-content">');
        template = template.concat('<div class="modal-header">');
        template = template.concat('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times; </button>');
        template = template.concat('<h4 class="modal-title"> ');
        template = template.concat(title);
        template = template.concat('</h4>');
        template = template.concat('</div>');
        template = template.concat('<div class="modal-body">');
        template = template.concat('<p>');
        template = template.concat(message);
        template = template.concat('</p>');
        template = template.concat('</div>');
        template = template.concat('<div class="modal-footer">');
        template = template.concat('<button class="btn btn-default" data-dismiss="modal"> 确定 </button>');
        template = template.concat('</div>');
        template = template.concat('</div>');
        template = template.concat('</article>');
        $('body').append(template);
    };
    BaseComponent.prototype.confirmTemplate = function (message, title, callback) {
        var template = '<article class="modal fade" id="confirm" tabindex="-1" role="confirm" aria-hidden="true">';
        template = template.concat('<div class="modal-content">');
        template = template.concat('<div class="modal-header">');
        template = template.concat('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>');
        template = template.concat('<h4 class="modal-title">');
        template = template.concat(title);
        template = template.concat('</h4>');
        template = template.concat('</div>');
        template = template.concat('<div class="modal-body">');
        template = template.concat('<p>');
        template = template.concat(message);
        template = template.concat('</p>');
        template = template.concat('</div>');
        template = template.concat('<div class="modal-footer">');
        template = template.concat('<button aria-hidden="true" data-dismiss="modal" class="btn btn-default">取消</button>');
        template = template.concat('<button id="confirmSuccess" class="btn btn-default" click="">确定</button>');
        template = template.concat('</div>');
        template = template.concat('</div>');
        template = template.concat('</article>');
        $('body').append(template);
        $('body').on('click', '#confirmSuccess', function () {
            callback();
        });
    };
    BaseComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: '../views/base.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BaseComponent);
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map
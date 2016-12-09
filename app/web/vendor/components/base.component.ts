import { Component } from '@angular/core';
import { AppOptions } from '../app.options';

declare const $: any;

@Component({
    moduleId: module.id
})

export class BaseComponent {
    public modalManager: any;
    public openModals: any;
    public title: string;
    public message: string;

    constructor() { }

    /**
     * 打开进度条
     * 
     * @memberOf BaseComponent
     */
    openProgress(): void {
        $('body').modalmanager('loading');
    }

    /**
     * 关闭进度条
     * 
     * @memberOf BaseComponent
     */
    closeProgress(): void {
        this.modalManager = this.modalManager || $("body").data("modalmanager");
        this.openModals = this.openModals || this.openModals.getOpenModals();
        this.modalManager.removeLoading();
    }

    /**
     * 弹出提示
     * 
     * @param {string} message
     * @param {string} title
     * 
     * @memberOf BaseComponent
     */
    alert(message: string, title: string): void {
        this.message = message;
        this.title = title;
        this.alertTemplate(message, title);

        $("body").append("<a id='alertPanel' href='#alert' data-toggle='modal' role='button' style='visibility:hidden'></a>");
        $('#alertPanel').click();
        $('#alertPanel').remove();
    }

    /**
     * 弹出confirm
     * 
     * @param {string} message
     * @param {string} title
     * 
     * @memberOf BaseComponent
     */
    confirm(message: string, title: string, callback: any): void {
        this.message = message;
        this.title = title;
        this.confirmTemplate(message, title, callback);

        $("body").append("<a id='confirmPanel' href='#confirm' data-toggle='modal' role='button' style='visibility:hidden'></a>");
        $('#confirmPanel').click();
        $('#confirmPanel').remove();
    }

    alertTemplate(message: string, title: string): void {
        let template = '<article class="modal fade" id="alert" tabindex="-1" role="alert" aria-hidden="true">';
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
    }

    confirmTemplate(message: string, title: string, callback: any): void {
        let template = '<article class="modal fade" id="confirm" tabindex="-1" role="confirm" aria-hidden="true">';
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
    }
}

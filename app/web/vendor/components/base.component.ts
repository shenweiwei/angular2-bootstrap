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
     * @param {string} title
     * @param {string} message
     * 
     * @memberOf BaseComponent
     */
    alert(title: string, message: string): void {
        this.title = title;
        this.message = message;

        this.alertTemplate(title, message);

        $("body").append("<a id='alertPanel' href='#alert' data-toggle='modal' role='button' style='visibility:hidden'></a>");
        $('#alertPanel').click();
        $('#alertPanel').remove();
    }

    /**
     * 弹出confirm
     * 
     * @param {string} title
     * @param {string} message
     * 
     * @memberOf BaseComponent
     */
    confirm(title: string, message: string, callback: any): void {
        this.title = title;
        this.message = message;

        this.confirmTemplate(title, message, callback);

        $("body").append("<a id='confirmPanel' href='#confirm' data-toggle='modal' role='button' style='visibility:hidden'></a>");
        $('#confirmPanel').click();
        $('#confirmPanel').remove();
    }

    alertTemplate(title: string, message: string): void {
        let template = '<article class="modal fade" id="alert" tabindex="-1" role="alert" aria-hidden="true">'
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
    }

    confirmTemplate(title: string, message: string, callback: any): void {
        let template = '<article class="modal fade" id="confirm" tabindex="-1" role="confirm" aria-hidden="true">'
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
    }
}

import { Component } from '@angular/core';

declare const $: any;

@Component({
    moduleId: module.id
})

export class BaseComponent {
    public modalManager: any;
    public openModals: any;

    constructor() {
    }

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
        this.openModals = this.openModals||this.openModals.getOpenModals();
        this.modalManager.removeLoading();
    }
}

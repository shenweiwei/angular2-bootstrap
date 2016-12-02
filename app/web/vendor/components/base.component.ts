import { Component } from '@angular/core';

declare const $: any;

@Component({
    moduleId: module.id
})

export class BaseComponent {

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
        let modalManager = $("body").data("modalmanager");
        let openModals = modalManager.getOpenModals();
        modalManager.removeLoading();
    }
}

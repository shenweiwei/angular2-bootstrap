import { Component, Input, AfterViewInit, ElementRef, Renderer } from '@angular/core';
import { ButtonItem } from 'vendor/util';
import { ComponentConstants, StringUtil } from 'vendor/common';

@Component({
    selector: 'button-component',
    templateUrl: '../views/button.html',
    styleUrls: ['../framework/compass/stylesheets/vendor.css']
})

export class ButtonComponent implements AfterViewInit {
    public buttonItem: ButtonItem = new ButtonItem();
    @Input() type: string;
    @Input() btnClass: string;
    @Input() value: string;
    @Input() url: string;

    constructor(public el: ElementRef, public renderer: Renderer) { }

    ngAfterViewInit(): void {
        this.buttonItem.name = this.value;
        this.buttonItem.url = this.url;
        this.buttonItem.type = this.type;
        this.buttonItem.class = this.btnClass;
        this.buttonItem.url = this.url;

        this.setButtonDisabled();
    }

    setButtonDisabled(): void {
        const authorityUrls = sessionStorage.getItem('authorityUrls');

        if (StringUtil.isEmpty(authorityUrls)||this.buttonItem.type==='reset') {
            return;
        }
    
        if (authorityUrls.indexOf(this.buttonItem.url) < 0) {
            this.renderer.setElementClass(this.el.nativeElement, ComponentConstants.DISABLED, true);
        }

    }
}
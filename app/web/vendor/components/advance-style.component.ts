import { Component } from '@angular/core';
import { AppOptions } from '../app.options';
import { ComponentConstants } from 'vendor/common';

@Component({
    selector: 'advance-style-component',
    templateUrl: 'app/web/vendor/views/advance-style.html'
})

export class AdvanceStyleComponent {

    constructor(public appOptions: AppOptions) { }

    openAdvanceStylePanel(): void {
        if (this.appOptions.advanceStyleState === ComponentConstants.STATE_OPEN) {
            this.appOptions.advanceStyleState = ComponentConstants.STATE_CLOSE;
            this.appOptions.advanceStyleDisplay = ComponentConstants.DISPLAY_NONE;
        } else {
            this.appOptions.advanceStyleState = ComponentConstants.STATE_OPEN;
            this.appOptions.advanceStyleDisplay = ComponentConstants.DISPLAY_BLOCK;
        }

    }
}
import { Directive, OnChanges, SimpleChanges, Input } from '@angular/core';

@Directive({
    selector: '[input-listener]'
})

export class InputListenerDirective implements OnChanges {
    @Input() value: string;
    @Input() changeCallback: Function;
    @Input() advanceValue: any;

    ngOnChanges(changes: SimpleChanges) {
        // for (let propName in changes) {
         if(changes['value']){
            let chng = changes['value'];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            console.log(`value: currentValue = ${cur}, previousValue = ${prev}`);

            this.changeCallback(chng.currentValue, chng.previousValue);
         }
        // }
    }
}
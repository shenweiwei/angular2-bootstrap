import { Component, Input } from '@angular/core';

@Component({
    selector: 'combobox-component',
    templateUrl: 'app/web/vendor/views/combobox.html',
    styleUrls: ['app/web/vendor/framework/compass/stylesheets/vendor.css']
})

export class ComboBoxComponent {
    @Input() label: string;
}
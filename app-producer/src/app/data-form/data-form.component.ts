import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataForm } from '../dataForm';
import { AppService } from '../app.service';

@Component({
    selector: 'app-data-form',
    templateUrl: './data-form.component.html',
    styleUrls: ['./data-form.component.css']
})

export class DataFormComponent {

    model = new DataForm('', '', '');

    constructor(private appService: AppService) {}

    @Output() clickEmitter = new EventEmitter();

    onClick() {
        this.clickEmitter.emit(this.model);
        this.clearModel();
    }

    clearModel() {
        this.model = new DataForm ('', '', '');
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { Formula } from 'src/app/models/formula';
import { Form, ValueControls } from '../../../models';

@Component({
    selector: 'app-form-factory',
    templateUrl: './form-factory.component.html',
    styleUrls: ['./form-factory.component.scss']
})

export class FormFactoryComponent implements OnInit {
    constructor() { }
    @Input() col: number
    @Input() colSm: number
    @Input() colMd: number
    @Input() colLg: number
    @Input() colXl: number
    @Input() FormObject: Formula

    controls: ValueControls[]
    formTitle: string
    content: string = "10"
    validOutputUnits: string[]
    defaultOutputUnit: string
    ngOnInit() {
    }

    createControlClass(form: Form) {
        let classList = `${this.col > 0 ? 'col-' + this.col : ''} ${this.colSm > 0 ? 'col-sm-' + this.colSm : ''} ${this.colMd > 0 ? 'col-md-' + this.colMd : ''}${this.colLg > 0 ? 'col-lg' + this.colLg : ''} ${this.colXl > 0 ? 'col-xl-' + this.colXl : ''} `
        if (classList.length > 4) {
            return form.ValueControls.length >= 4 ? "col-6" : "col-12"
        } else {
            return classList;
        }
    }

    drop(e) {
        // console.log("hi", e)
        e.class = "show"
    }

    setSelected(id: number, option: any) {
        let fc = this.controls.filter(x => x.Id == id)
        for (let x in fc) {
            fc[x].UserUnit = option.LongName
        }
    }
}
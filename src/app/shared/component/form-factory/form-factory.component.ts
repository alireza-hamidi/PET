import { Component, Input, OnInit } from '@angular/core';
import { Formula } from 'src/app/models/formula';
import { Form, ValueControls, CalculationResult } from '../../../models';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { FormFactoryService } from './form-factory.service';

@Component({
    selector: 'app-form-factory',
    templateUrl: './form-factory.component.html',
    styleUrls: ['./form-factory.component.scss']
})

export class FormFactoryComponent implements OnInit {
    constructor(private service: FormFactoryService) { }
    faCalculator = faCalculator
    @Input() col: number
    @Input() colSm: number
    @Input() colMd: number
    @Input() colLg: number
    @Input() colXl: number
    @Input() FormObject: Formula

    formTitle: string
    content: CalculationResult
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

    setSelected(formControll: ValueControls, symbol: string) {
        formControll.UserUnit = symbol
    }

    calculate() {
        this.service.post<CalculationResult>("home/calculate", this.FormObject).subscribe(res => {
            this.content = res
            console.log(res)
        });
    }
}
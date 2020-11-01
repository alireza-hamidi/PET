import { Component, OnInit } from '@angular/core';
import { Formula } from 'src/app/models/formula';
import { Control, Form } from '../../../models';
import { MaineService } from '../main.service'

@Component({
    selector: 'app-main-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    constructor(private service: MaineService) { }
    formulas: Formula[]
    formControls: Form[]
    units: string[]
    activeTab: number = 0
    
    ngOnInit() {
        this.loadDate()
    }

    loadDate() {
        this.service.get<Formula[]>("").subscribe(res => {
            this.formulas = res
        })
    }

    createControlClass(form: Form) {
        let classList = `${form.col > 0 ? 'col-' + form.col : ''} ${form.colSm > 0 ? 'col-sm-' + form.colSm : ''} ${form.colMd > 0 ? 'col-md-' + form.colMd : ''} ${form.colLg > 0 ? 'col-lg-' + form.colLg : ''} ${form.colXl > 0 ? 'col-xl-' + form.colXl : ''} `
        return classList.length > 4 ? classList : "col-12"
    }
}
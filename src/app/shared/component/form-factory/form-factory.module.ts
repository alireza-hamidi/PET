import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFactoryComponent } from './form-factory.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { UnitConverterModule } from '../../directive/unit-converter/unit-conveter.module';
@NgModule({
    imports: [CommonModule, BsDropdownModule, UnitConverterModule],
    exports: [FormFactoryComponent],
    declarations: [FormFactoryComponent],
    providers: [],
})
export class FormFactoryModule { }

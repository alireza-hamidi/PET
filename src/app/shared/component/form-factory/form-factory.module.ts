import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormFactoryComponent } from './form-factory.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { UnitConverterModule } from '../../directive/unit-converter/unit-conveter.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormFactoryService } from './form-factory.service';

@NgModule({
    imports: [CommonModule, BsDropdownModule, UnitConverterModule, FontAwesomeModule, HttpClientModule],
    exports: [FormFactoryComponent],
    declarations: [FormFactoryComponent],
    providers: [FormFactoryService],
})
export class FormFactoryModule { }

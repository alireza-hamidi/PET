import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main.routing.module'
import { DashboardComponent } from './dashboard/dashboard.component'
import { FormFactoryModule } from './../../shared/component/form-factory/form-factory.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnimateModule } from '../../shared/animations/animate.module'
@NgModule({
    imports: [
        MainRoutingModule,
        FormFactoryModule,
        CommonModule,
        FontAwesomeModule,
        AnimateModule
    ],
    exports: [],
    declarations: [
        DashboardComponent
    ],
    providers: [],
})
export class MainModule { }

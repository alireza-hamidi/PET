import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main.routing.module'
import { DashboardComponent } from './dashboard/dashboard.component'
import { FormFactoryModule } from './../../shared/component/form-factory/form-factory.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnimateModule } from '../../shared/animations/animate.module';
import { HttpClientModule } from '@angular/common/http';
import { MaineService } from './main.service'
@NgModule({
    imports: [
        AnimateModule,
        CommonModule,
        HttpClientModule,
        MainRoutingModule,
        FormFactoryModule,
        FontAwesomeModule,
    ],
    exports: [],
    declarations: [
        DashboardComponent
    ],
    providers: [MaineService],
})
export class MainModule { }

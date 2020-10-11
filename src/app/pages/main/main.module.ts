import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main.routing.module'

import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
    imports: [
        MainRoutingModule        
    ],
    exports: [],
    declarations: [
        DashboardComponent
    ],
    providers: [],
})
export class MainModule { }

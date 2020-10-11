import { NgModule } from '@angular/core';

import { P404Component } from './404/404.component';
import { P500Component } from './500/500.component';
import { ErrorRoutingModule } from './error.routing'
@NgModule({
    imports: [ErrorRoutingModule],
    exports: [],
    declarations: [
        P404Component,
        P500Component
    ],
    providers: [],
})
export class ErrorModule { }

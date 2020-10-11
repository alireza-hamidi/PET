import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { LoginRoutingModule } from './login.routing.module'
@NgModule({
    imports: [LoginRoutingModule],
    exports: [],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    providers: [],
})
export class LoginModule { }

import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
    imports: [],
    exports: [NavbarComponent, FooterComponent],
    declarations: [NavbarComponent, FooterComponent],
    providers: [],
})
export class SharedModule { }

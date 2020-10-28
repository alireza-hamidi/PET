import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnonymouseLayoutComponent, BusinessLayoutComponent } from './containers'
import { SharedModule } from './containers/shared/shared.module'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnimateModule } from './shared/animations/animate.module'

@NgModule({
  declarations: [
    AppComponent,
    [AnonymouseLayoutComponent,
    BusinessLayoutComponent]
  ],
  imports: [
    AnimateModule,
    SharedModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

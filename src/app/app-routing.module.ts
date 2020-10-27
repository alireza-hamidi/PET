import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnonymouseLayoutComponent } from './containers/anonymouse-layout/anonymouse-layout.component';
const routes: Routes = [
  {
    path: 'error',
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    component: AnonymouseLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
    }]
  },
  { path: '**', redirectTo: 'error/404' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

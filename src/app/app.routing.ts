import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

export const routes: Routes = [
  {
    path: 'error',
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  { path: '**', redirectTo: 'error/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

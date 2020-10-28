import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component'
export const routes: Routes = [
    {
        path: 'main',
        component: DashboardComponent
    },
    {
        path: 'buziness/main',
        component: DashboardComponent
    },
    { path: '', pathMatch: 'full', redirectTo: 'main' }
]
@NgModule({
    imports: [RouterModule.forChild(routes)], exports: [RouterModule]
})
export class MainRoutingModule { }
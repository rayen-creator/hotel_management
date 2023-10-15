import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import {ItemsComponent} from "./inventory/items/items.component";

const routes: Routes = [{
  path: '', component: BackofficeComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'inventory', component: ItemsComponent },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }

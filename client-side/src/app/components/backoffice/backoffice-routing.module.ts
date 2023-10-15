import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import {ItemsComponent} from "./inventory/items/items.component";
import {ItemFormComponent} from "./inventory/item-form/item-form.component";

const routes: Routes = [{
  path: '', component: BackofficeComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'inventory', component: ItemsComponent },
    { path: 'inventory/add', component: ItemFormComponent },
    { path: 'inventory/update/:id', component: ItemFormComponent },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }

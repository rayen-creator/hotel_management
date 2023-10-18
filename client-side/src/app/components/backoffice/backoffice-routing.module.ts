import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ListStaffComponent } from './staff-management/list-staff/list-staff.component';
import { ListTicketsComponent } from './support/list-tickets/list-tickets.component';

const routes: Routes = [{
  path: '', component: BackofficeComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'staff', loadChildren: () => import('./staff-management/staff-management.module').then(m => m.StaffManagementModule) },

   
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }

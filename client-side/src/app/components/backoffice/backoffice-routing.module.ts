import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD
import { ParkingComponent } from './parking/parking.component';
import { ParkingFormComponent } from './parking-form/parking-form.component';
import { ParkingReservationComponent } from './parking-reservation/parking-reservation.component';

const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },

      { path: 'parking', component: ParkingComponent },
      { path: 'parking/add', component: ParkingFormComponent },
      { path: 'parking/update/:id', component: ParkingFormComponent },
      { path: 'parkingres', component: ParkingReservationComponent },
    ],
  },
];
=======
import { ListStaffComponent } from './staff-management/list-staff/list-staff.component';
import { ListTicketsComponent } from './support/list-tickets/list-tickets.component';
import {ItemsComponent} from "./inventory/items/items.component";
import {ItemFormComponent} from "./inventory/item-form/item-form.component";

const routes: Routes = [{
  path: '', component: BackofficeComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'staff', loadChildren: () => import('./staff-management/staff-management.module').then(m => m.StaffManagementModule) },
,
    { path: 'inventory', component: ItemsComponent },
    { path: 'inventory/add', component: ItemFormComponent },
    { path: 'inventory/update/:id', component: ItemFormComponent },
   
  ]
}];
>>>>>>> 53994bf7b84dc1bbb43090bb1b6fc4e16644f3d4

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}

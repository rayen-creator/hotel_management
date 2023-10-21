import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ListStaffComponent } from './staff-management/list-staff/list-staff.component';
import { ListTicketsComponent } from './support/list-tickets/list-tickets.component';
import { ItemsComponent } from './inventory/items/items.component';
import { ItemFormComponent } from './inventory/item-form/item-form.component';
import { ParkingComponent } from './parking/parking.component';
import { ParkingFormComponent } from './parking-form/parking-form.component';
import { ParkingReservationComponent } from './parking-reservation/parking-reservation.component';
import {ProfileFormComponent} from "./profile-form/profile-form.component";

const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'profile/update/:id', component: ProfileFormComponent },
      { path: 'staff',loadChildren: () =>import('./staff-management/staff-management.module').then((m) => m.StaffManagementModule),},
      { path: 'support/:ticketStatus', component: ListTicketsComponent },
      { path: 'inventory', component: ItemsComponent },
      { path: 'inventory/add', component: ItemFormComponent },
      { path: 'inventory/update/:id', component: ItemFormComponent },
      { path: 'parking', component: ParkingComponent },
      { path: 'parking/add', component: ParkingFormComponent },
      { path: 'parking/update/:id', component: ParkingFormComponent },
      { path: 'parkingres', component: ParkingReservationComponent },
      { path:'auxiliaryServices', loadChildren:() => import('./auxiliary-services/auxiliary-services.module').then(m=>m.AuxiliaryServicesModule)}
   
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}

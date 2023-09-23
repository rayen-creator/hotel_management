import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

const routes: Routes = [{
  path: '', component: AccountComponent, children: [
    { path: 'reservations', component: ReservationListComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

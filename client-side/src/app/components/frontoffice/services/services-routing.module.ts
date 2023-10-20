import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import { MakeReservationsComponent } from './make-reservations/make-reservations.component';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { ListServicesComponent } from './list-services/list-services.component';

const routes: Routes = [{ path: '', component: ServicesComponent , children:[
  { path: 'makeReservation', component: MakeReservationsComponent},
  { path: 'listReservations', component: ListReservationsComponent },
  { path: 'listServices', component: ListServicesComponent },

] }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }



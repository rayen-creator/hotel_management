import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { ListServicesComponent } from './list-services/list-services.component';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { MakeReservationsComponent } from './make-reservations/make-reservations.component';


@NgModule({
  declarations: [
    ServicesComponent,
    ListServicesComponent,
    ListReservationsComponent,
    MakeReservationsComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }

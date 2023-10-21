import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { ListServicesComponent } from './list-services/list-services.component';
import { MakeReservationsComponent } from './make-reservations/make-reservations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';


@NgModule({
  declarations: [
    ServicesComponent,
    ListServicesComponent,
    ListReservationsComponent,
    MakeReservationsComponent

  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', // Position of the toast
      timeOut: 3000, // Display duration (milliseconds)
      preventDuplicates: true, // Prevent duplicate toasts
    }),
  ]
})
export class ServicesModule { }

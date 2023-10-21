import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuxiliaryServicesRoutingModule } from './auxiliary-services-routing.module';
import { AuxiliaryServicesComponent } from './auxiliary-services.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ListServiceComponent } from './list-service/list-service.component';


@NgModule({
  declarations: [
    AuxiliaryServicesComponent,
    AddServiceComponent,
    ListServiceComponent
  ],
  imports: [
    CommonModule,
    AuxiliaryServicesRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', // Position of the toast
      timeOut: 3000, // Display duration (milliseconds)
      preventDuplicates: true, // Prevent duplicate toasts
    }),
  ]
})
export class AuxiliaryServicesModule { }

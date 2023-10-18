import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ParkingComponent } from './parking/parking.component';
import { ParkingReservationComponent } from './parking-reservation/parking-reservation.component';
import { FormsModule } from '@angular/forms';
import { ParkingFormComponent } from './parking-form/parking-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BackofficeComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    SidebarComponent,
    ParkingComponent,
    ParkingReservationComponent,
    ParkingFormComponent,
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class BackofficeModule {}

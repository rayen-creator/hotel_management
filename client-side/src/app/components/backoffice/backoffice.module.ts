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
import { ParkingFormComponent } from './parking-form/parking-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListTicketsComponent } from './support/list-tickets/list-tickets.component';
import { TicketCardComponent } from './support/ticket-card/ticket-card.component';
import { CommentSectionComponent } from './support/comment-section/comment-section.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

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
    ListTicketsComponent,
    TicketCardComponent,
    CommentSectionComponent,
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class BackofficeModule {}

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
import { ListTicketsComponent } from './support/list-tickets/list-tickets.component';
import { TicketCardComponent } from './support/ticket-card/ticket-card.component';
import { CommentSectionComponent } from './support/comment-section/comment-section.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsComponent } from './inventory/items/items.component';
import { ItemFormComponent } from './inventory/item-form/item-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileFormComponent } from './profile-form/profile-form.component';

@NgModule({
  declarations: [
    BackofficeComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    SidebarComponent,,
    ParkingComponent,
    ParkingReservationComponent,
    ParkingFormComponent,
    ListTicketsComponent,
    TicketCardComponent,
    CommentSectionComponent,
    ItemsComponent,
    ItemFormComponent,
    ProfileFormComponent,
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class BackofficeModule {}

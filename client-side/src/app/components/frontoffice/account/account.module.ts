import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';

import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { AddReviewComponent } from './support/add-review/add-review.component';
import { ListReviewComponent } from './support/list-review/list-review.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountComponent,
    SidebarComponent,
    ReservationListComponent,
    AddReviewComponent,
    ListReviewComponent,

  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }

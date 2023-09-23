import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';

import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';


@NgModule({
  declarations: [
    AccountComponent,
    SidebarComponent,
    ReservationListComponent,

  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ItemsComponent } from './inventory/items/items.component';
import { ItemFormComponent } from './inventory/item-form/item-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    BackofficeComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    SidebarComponent,
    ItemsComponent,
    ItemFormComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BackofficeModule { }

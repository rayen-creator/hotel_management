import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffsRoutingModule } from './staffs-routing.module';
import { StaffsComponent } from './staffs.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    StaffsComponent,
    ListTasksComponent,
  ],
  imports: [
    CommonModule,
    StaffsRoutingModule,
    SharedModule
  ]
})
export class StaffsModule { }

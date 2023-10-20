import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffManagementRoutingModule } from './staff-management-routing.module';
import { StaffManagementComponent } from './staff-management.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import {SharedModule} from "../../shared/shared.module";




@NgModule({
  declarations: [
    StaffManagementComponent,
    AddStaffComponent,
    ListStaffComponent,
    AddTaskComponent,
    ListTaskComponent,

  ],
  imports: [
    CommonModule,
    StaffManagementRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class StaffManagementModule { }

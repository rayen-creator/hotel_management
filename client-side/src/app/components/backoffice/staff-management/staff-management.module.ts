import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffManagementRoutingModule } from './staff-management-routing.module';
import { StaffManagementComponent } from './staff-management.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { OrderByTimePipe } from 'src/app/core/utils/order-by-time.pipe';


@NgModule({
  declarations: [
    StaffManagementComponent,
    AddStaffComponent,
    ListStaffComponent,
    AddTaskComponent,
    ListTaskComponent,
    OrderByTimePipe
  ],
  imports: [
    CommonModule,
    StaffManagementRoutingModule,
    ReactiveFormsModule
  ]
})
export class StaffManagementModule { }

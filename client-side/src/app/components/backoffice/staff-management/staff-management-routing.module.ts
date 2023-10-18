import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffManagementComponent } from './staff-management.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTaskComponent } from './list-task/list-task.component';

const routes: Routes = [{ path: '', component: StaffManagementComponent ,children: [
  { path: 'addstaff', component: AddStaffComponent },
  { path: 'addtask/:id', component: AddTaskComponent },
  { path: 'listTasks/:id', component: ListTaskComponent },
  { path: 'listStaff', component: ListStaffComponent }

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffManagementRoutingModule { }

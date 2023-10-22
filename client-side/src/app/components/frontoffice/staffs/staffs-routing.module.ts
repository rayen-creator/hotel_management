import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffsComponent } from './staffs.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';

const routes: Routes = [{ path: '', component: StaffsComponent ,children: [

  { path: 'ListTasks', component: ListTasksComponent }

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffsRoutingModule { }

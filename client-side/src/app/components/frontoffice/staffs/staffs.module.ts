import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffsRoutingModule } from './staffs-routing.module';
import { StaffsComponent } from './staffs.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { OrderByTimePipe } from 'src/app/core/utils/order-by-time.pipe';


@NgModule({
  declarations: [
    StaffsComponent,
    ListTasksComponent,
    OrderByTimePipe
  ],
  imports: [
    CommonModule,
    StaffsRoutingModule
  ]
})
export class StaffsModule { }

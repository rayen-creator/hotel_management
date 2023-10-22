import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminResponseComponent } from './admin-response/admin-response.component';
import {OrderByTimePipe} from "../../core/utils/order-by-time.pipe";



@NgModule({
  exports:[AdminResponseComponent, OrderByTimePipe ],
  declarations: [AdminResponseComponent, OrderByTimePipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminResponseComponent } from './admin-response/admin-response.component';



@NgModule({
  exports:[AdminResponseComponent],
  declarations: [AdminResponseComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

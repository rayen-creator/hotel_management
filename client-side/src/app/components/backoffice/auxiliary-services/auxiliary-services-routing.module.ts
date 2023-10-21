import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuxiliaryServicesComponent } from './auxiliary-services.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { ListServiceComponent } from './list-service/list-service.component';

const routes: Routes = [{ path: '', component: AuxiliaryServicesComponent, children:[
  { path: 'addService', component: AddServiceComponent },
  { path: 'listServices', component: ListServiceComponent },
  { path: 'updateService/:id', component: ListServiceComponent },

] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuxiliaryServicesRoutingModule { }

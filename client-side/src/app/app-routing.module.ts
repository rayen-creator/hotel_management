import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/shared/error/error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/frontoffice/frontoffice.module').then(
        (m) => m.FrontofficeModule
      ),
  },
  {
    path: 'adminpanel',
    loadChildren: () =>
      import('./components/backoffice/backoffice.module').then(
        (m) => m.BackofficeModule
      ),
  },
  { path: 'staff', loadChildren: () => import('./components/backoffice/staff-management/staff-management.module').then(m => m.StaffManagementModule) },
  {
    path:'**',component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

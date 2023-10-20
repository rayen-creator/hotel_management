import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontofficeComponent } from './frontoffice.component';
import { HomeComponent } from './shared/home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AboutComponent } from './shared/about/about.component';
import { MyParkingResComponent } from './parking/MyParkingReservations/my-parking-res/my-parking-res.component';
import { AddParkingResComponent } from './parking/AddParkingReservations/add-parking-res/add-parking-res.component';

const routes: Routes = [
  {
    path: '',
    component: FrontofficeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'about', component: AboutComponent },
      { path: 'account', loadChildren: () => import('./account/account.module').then((m) => m.AccountModule), },
      { path: 'parkingRes', component: MyParkingResComponent },
      { path: 'parkingRes/add', component: AddParkingResComponent },
      { path: 'parkingRes/update/:id', component: AddParkingResComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontofficeRoutingModule { }

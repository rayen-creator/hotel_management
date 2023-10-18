import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { FrontofficeComponent } from './frontoffice.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './shared/about/about.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FrontofficeComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
  ]
})
export class FrontofficeModule { }

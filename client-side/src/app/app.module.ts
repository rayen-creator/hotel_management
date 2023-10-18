import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderByTimePipe } from './core/utils/order-by-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

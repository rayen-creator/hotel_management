import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { AddReviewComponent } from './support/add-review/add-review.component';
import { ListReviewComponent } from './support/list-review/list-review.component';

const routes: Routes = [{
  path: '', component: AccountComponent, children: [
    { path: 'reservations', component: ReservationListComponent },
    { path: 'addReview', component: AddReviewComponent },
    { path: 'reviews', component: ListReviewComponent }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

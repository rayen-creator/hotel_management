import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Feedback } from 'src/app/core/models/feedback.model';
import { FeedbackService } from 'src/app/core/services/feedback.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit, OnDestroy {
  feedbacks: Feedback[]=[];
  ticketStatus: string;
  subs: Subscription;

  constructor(
    private feedbackService: FeedbackService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  ngOnInit(): void {
    // Listen all the time for changes in the 'ticketStatus' route parameter.
    this.subs = this.activatedRoute.params.subscribe(params => {
      this.ticketStatus = params['ticketStatus'];
      this.filterFeedbacks()
    });

  }


  private filterFeedbacks() {
    if (this.ticketStatus) {
      this.feedbackService.getRefreshedData().subscribe({
        next: (data: Feedback[]) => {
          console.log("data before",data);
          // Check if the list is empty.
          if (!data || data.length === 0) {
            this.feedbackService.getAll();
            return;
          }
          console.log("data after",data);
          this.feedbacks = data.filter(feedback => feedback.ticketStatus === this.ticketStatus);
        },
        error: (err) => {
          console.log("err", err)
        }
      })
    }
  }

}
import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/core/models/feedback.model';
import { FeedbackService } from 'src/app/core/services/feedback.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {

  feedbacks: Feedback[]
  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedbackService.getRefreshedData().subscribe((data: any) => {
      this.feedbacks = data;
      
      if (this.feedbacks.length == 0) {
        this.feedbackService.getAll();
      }
    });

  }

}

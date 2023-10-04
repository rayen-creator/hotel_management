import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/core/models/feedback.model';
import { FeedbackService } from 'src/app/core/services/feedback.service';

@Component({
  selector: 'app-list-review',
  templateUrl: './list-review.component.html',
  styleUrls: ['./list-review.component.css']
})
export class ListReviewComponent implements OnInit {

  constructor(private feedbackService: FeedbackService) { }

  feedbacks: Feedback[]
  
  ngOnInit(): void {
    this.feedbackService.getAll().subscribe((data: any) => {
      this.feedbacks = data;
    })
  }


}

import { Component } from '@angular/core';
import { Feedback } from 'src/app/core/models/feedback.model';
import { FeedbackService } from 'src/app/core/services/feedback.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  feedbacks: Feedback[]
  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedbackService.getAll();
    //for refreshed data
    this.feedbackService.getRefreshedData().subscribe((data: Feedback[]) => {
      //return closed review which mean review seen by administrators
      this.feedbacks = data.filter(feedback => feedback.ticketStatus == "closed");
    })
  }
}

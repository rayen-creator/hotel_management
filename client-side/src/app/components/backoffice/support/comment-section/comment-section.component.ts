import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/core/models/feedback.model';
import { FeedbackService } from 'src/app/core/services/feedback.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  @Input() id: number
  @Output() toggle :EventEmitter<boolean>=new EventEmitter()

  feedback: Feedback;
  constructor(private feedbackSerivce: FeedbackService, private router: Router) { }

  ngOnInit(): void {
    this.feedback = new Feedback();
  }

  submit() {
    this.feedbackSerivce.respondeToFeedback(this.id, this.feedback);
    this.toggle.emit(false);
  }

}

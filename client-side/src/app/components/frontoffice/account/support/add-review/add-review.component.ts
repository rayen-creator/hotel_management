import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/core/services/feedback.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  formgroup:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private feedbackService:FeedbackService,
    private router:Router
  ){}

  

  ngOnInit(): void {
    this.formgroup=this.formBuilder.group({
      title:['',Validators.required],
      serviceType:['',Validators.required],
      description:['',Validators.required],

    })
  }
  
  submit(){
    this.feedbackService.createFeedback(this.formgroup.value).subscribe({
      next:()=>{
        this.router.navigate(['/account/reviews'])
      },
      error:()=>{

      }
    })
  }
}

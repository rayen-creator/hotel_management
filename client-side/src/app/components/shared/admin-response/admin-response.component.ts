import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Feedback } from 'src/app/core/models/feedback.model';

@Component({
  selector: 'app-admin-response',
  templateUrl: './admin-response.component.html',
  styleUrls: ['./admin-response.component.css']
})
export class AdminResponseComponent implements OnInit {

  @Input() feedback:Feedback
  toggle:boolean=false;

  constructor(){}
  ngOnInit(): void {
  }

  submit() {
    this.toggle=!this.toggle
  }
}


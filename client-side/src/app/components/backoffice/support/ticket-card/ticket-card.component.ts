import { Component, Input, OnInit } from '@angular/core';
import { Feedback } from 'src/app/core/models/feedback.model';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css']
})
export class TicketCardComponent implements OnInit{
  @Input() feedback:Feedback;
  toggle:boolean = false;
  constructor(){}

  ngOnInit(): void {
  }

  toggleComment(){
       this.toggle=!this.toggle
  }
}

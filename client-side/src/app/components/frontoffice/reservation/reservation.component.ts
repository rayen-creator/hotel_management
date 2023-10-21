import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { room } from 'src/app/core/models/room.model';
import{reservation, status} from 'src/app/core/models/reservation.model'
import { ReservationService } from 'src/app/core/services/reservation.service';
import { RoomService } from 'src/app/core/services/room.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{
  constructor(private ReservationService:ReservationService ,private route: ActivatedRoute, private RoomService:RoomService) { }
  idRoom: string;
  selectedNubrP:string;
  room:room
  nbrJour:any;
  dateArrivee:any;
  reservation :reservation = {
    idReservation:0,
    dateArrivee:'',
    nbrJour: 3,
    nbrPersonne:0,
    status:"EN_ATTENTE",
    prixTotal:1,
    userId:2
  }; 
   ngOnInit(): void {
    this.reservation.nbrPersonne = parseInt(this.selectedNubrP);
    this.idRoom = this.route.snapshot.paramMap.get('idRoom');
    this.RoomService.getById(parseInt(this.idRoom)).subscribe((data:any)=> {this.room=data})
  
   


  }

  submitReservation():void{
    console.log(this.reservation)

    this.ReservationService.createReservation(parseInt(this.idRoom),this.reservation).subscribe(
      (response) => {
        console.log(this.reservation)
        // Handle success, e.g., show a success message or navigate to a confirmation page.
        console.log('Reservation created successfully:', response);
        // You can add further logic here.
      }
    );
  }


}

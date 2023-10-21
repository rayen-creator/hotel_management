import { Component, OnInit } from '@angular/core';
import { reservation } from 'src/app/core/models/reservation.model';
import { ReservationService } from 'src/app/core/services/reservation.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  constructor(private ReservationService: ReservationService) { }
reservations:reservation[]
reservation:reservation
  ngOnInit(): void {
    this.ReservationService.getAll().subscribe((data: any) => {
      this.reservations = data;
    })
  }
  deleteReservation(reservationId:number):void{
    this.ReservationService.deleteReservation(reservationId).subscribe( (response) => {
      // Handle success, e.g., show a success message or navigate to a confirmation page.
      console.log('Reservation deleted successfully:', response);
      window.location.reload();

      // You can add further logic here.
    }
  );
  }

}

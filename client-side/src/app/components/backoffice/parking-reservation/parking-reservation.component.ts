import { Component, OnInit } from '@angular/core';
import {
  ReservationStatus,
  ParkingReservation,
} from '../../../core/models/parkingreservation.model';
import { Router } from '@angular/router';
import { ParkingReservationService } from '../../../core/services/parkingreservation.service';
@Component({
  selector: 'app-parking-reservation',
  templateUrl: './parking-reservation.component.html',
  styleUrls: ['./parking-reservation.component.css'],
})
export class ParkingReservationComponent implements OnInit {
  reservations: ParkingReservation[] = [];
  filteredReservations: ParkingReservation[] = [];
  searchTerm: string = '';
  selectedStatus: string = 'all';

  constructor(
    private reservationService: ParkingReservationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllReservations();
  }

  getAllReservations() {
    this.reservationService.getAllParkingReservations().subscribe({
      next: (reservations: ParkingReservation[]) => {
        this.reservations = reservations;
        this.filteredReservations = reservations; // Initialize filtered list
      },
      error: (err) => {
        console.error('Error fetching reservations:', err);
      },
    });
  }

  searchReservations() {
    this.filteredReservations = this.reservations.filter((reservation) =>
      reservation.guestName
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase())
    );
  }

  filterReservations() {
    if (this.selectedStatus === 'all') {
      this.filteredReservations = this.reservations;
    } else {
      this.filteredReservations = this.reservations.filter(
        (reservation) => reservation.status === this.selectedStatus
      );
    }
  }

  confirmReservation(reservation: ParkingReservation) {
    this.reservationService.confirmParkingReservation(reservation.id).subscribe(
      () => {
        reservation.status = ReservationStatus.accepted;

        this.getAllReservations();
      },
      (error) => {
        console.error('Error confirming reservation:', error);
      }
    );
  }

  declineReservation(reservation: ParkingReservation) {
    this.reservationService.declineParkingReservation(reservation.id).subscribe(
      () => {
        reservation.status = ReservationStatus.declined;

        this.getAllReservations();
      },
      (error) => {
        console.error('Error declining reservation:', error);
      }
    );
  }
}

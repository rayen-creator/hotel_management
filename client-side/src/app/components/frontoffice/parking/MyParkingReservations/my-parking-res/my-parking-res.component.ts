import { Component, OnInit } from '@angular/core';
import { ParkingReservation } from 'src/app/core/models/parkingreservation.model';
import { ParkingReservationService } from 'src/app/core/services/parkingreservation.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-my-parking-res',
  templateUrl: './my-parking-res.component.html',
  styleUrls: ['./my-parking-res.component.css'],
})
export class MyParkingResComponent implements OnInit {
  reservations: ParkingReservation[] = [];
  filteredReservations: ParkingReservation[] = [];
  searchTerm: string = '';
  selectedStatus: string = 'all'; // Initialize with 'all'
  parkingReservations: any[] = [];
  constructor(
    private reservationService: ParkingReservationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getReservationsForClient();
  }

  getReservationsForClient() {
    this.reservationService.getAllParkingReservations().subscribe({
      next: (reservations: ParkingReservation[]) => {
        const finalData = reservations.filter(
          (_v) => _v.owner?.email === 'emna@gmail.com'
        );
        console.log(finalData);

        this.reservations = finalData;
        this.filteredReservations = finalData; // Initialize filtered list
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

  editReservation(reservation: ParkingReservation) {
    this.router.navigate(['parkingRes/update', reservation.id]);
  }

  deleteReservation(reservation: ParkingReservation) {
    Swal.fire({
      title: 'Are you sure you want to delete this parking reservation?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete',
    }).then((result) => {
      if (result.isConfirmed) {
        this.reservationService
          .deleteParkingReservation(reservation.id)
          .subscribe(
            () => {
              this.getReservationsForClient();
              Swal.fire(
                'Deleted',
                'Parking reservation has been deleted successfully.',
                'success'
              );
            },
            (error) => {
              console.error(error);
              Swal.fire(
                'Error',
                'An error occurred while deleting the parking reservation.',
                'error'
              );
            }
          );
      }
    });
  }

  addReservation() {
    this.router.navigate(['parkingRes/add']);
  }
}

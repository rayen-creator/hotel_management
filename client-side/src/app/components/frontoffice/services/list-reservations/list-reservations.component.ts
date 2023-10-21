import { Component, OnInit } from '@angular/core';
import { ServiceReservation } from 'src/app/core/models/serviceReservation.model';
import { AuxiliaryService, ServiceType } from 'src/app/core/models/auxiliaryService.model';
import { ServiceReservationService } from 'src/app/core/services/service-reservation.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.css']
})
export class ListReservationsComponent implements OnInit {
  serviceReservations: ServiceReservation[] = [];
  originalServiceReservations: ServiceReservation[] = [];
  completedReservations: number = 0;
  acceptedReservations: number = 0;
  totalReservations: number = 0;
  selectedServiceType: ServiceType | string = ''; // Initialize with an empty string

  constructor(
    private serviceReservationService: ServiceReservationService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadReservations();
  }

  getServiceTypeLabelClass(serviceType: ServiceType): string {
    switch (serviceType) {
      case ServiceType.RoomService:
        return 'service-type-label-room-service';
      case ServiceType.Restaurant:
        return 'service-type-label-restaurant';
      case ServiceType.Hospitality:
        return 'service-type-label-hospitality';
      case ServiceType.HotelAnimation:
        return 'service-type-label-hotel-animation';
      default:
        return ''; // You can add a default class for unknown service types
    }
  }

  deleteReservation(reservationId: number) {
    this.serviceReservationService.deleteServiceReservation(reservationId).subscribe(
      () => {
        // Reload the list of reservations after a successful deletion
        this.loadReservations();
      },
      (error) => {
        console.error('Error deleting reservation:', error);
        // Handle error, show an error message if necessary
        this.toastr.error('Error deleting reservation', 'error');
      }
    );
  }

  loadReservations() {
    this.serviceReservationService.getAllServiceReservations().subscribe(
      (reservations) => {
        this.serviceReservations = reservations;

        // Calculate counts for completed and accepted reservations
        const currentDate = new Date();
        this.completedReservations = reservations.filter(
          (reservation) => new Date(reservation.serviceDate) < currentDate
        ).length;

        this.acceptedReservations = reservations.filter(
          (reservation) => new Date(reservation.serviceDate) >= currentDate
        ).length;

        this.totalReservations = reservations.length;
      },
      (error) => {
        console.error('Error loading reservations:', error);
        // Handle error, show an error message if necessary
        this.toastr.error('Error loading reservations', 'error');
      }
    );
  }


  // Function to filter reservations based on ServiceType
  filterReservations() {
    if (this.selectedServiceType === '') {
      // If no filter is selected, show all reservations
      this.serviceReservations = this.originalServiceReservations;
    } else {
      // Filter reservations based on selected ServiceType
      this.serviceReservations = this.originalServiceReservations.filter(
        (reservation) => reservation.auxiliaryService.serviceType === this.selectedServiceType
      );
    }
  }
}

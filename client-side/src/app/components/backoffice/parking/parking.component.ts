import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../../../core/services/parking.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ParkingSpace } from '../../../core/models/parking.model';
@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css'],
})
export class ParkingComponent implements OnInit {
  searchTerm: string = '';
  parkingSpaces: any[] = [];
  filteredParkingSpaces: ParkingSpace[] = [];

  constructor(private parkingService: ParkingService, private router: Router) {}

  ngOnInit(): void {
    this.getAllParkingSpaces();
  }

  getAllParkingSpaces() {
    this.parkingService.getAllParkingSpaces().subscribe({
      next: (spaces: ParkingSpace[]) => {
        this.parkingSpaces = spaces;
      },
      error: (err) => {
        console.error('Error fetching parking spaces:', err);
      },
    });
  }

  addParkingSpace() {
    this.router.navigate(['adminpanel/parking/add']);
  }

  editParkingSpace(space: ParkingSpace) {
    this.router.navigate(['adminpanel/parking/update', space.id]);
  }

  searchParkingSpaces() {
    if (this.searchTerm) {
      this.filteredParkingSpaces = this.parkingSpaces.filter((space) =>
        space.spaceNumber.includes(this.searchTerm)
      );
    } else {
      // If searchTerm is empty, show all parking spaces.
      this.filteredParkingSpaces = this.parkingSpaces;
    }
  }

  deleteParkingSpace(space: ParkingSpace) {
    Swal.fire({
      title: 'Are you sure you want to delete this parking space?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete',
    }).then((result) => {
      if (result.isConfirmed) {
        this.parkingService.deleteParkingSpace(space.id).subscribe(
          () => {
            this.parkingSpaces = this.parkingSpaces.filter(
              (pSpace) => pSpace.id !== space.id
            );
            Swal.fire(
              'Deleted',
              'Parking space has been deleted successfully.',
              'success'
            );
          },
          (error) => {
            console.error(error);
            Swal.fire(
              'Error',
              'An error occurred while deleting the parking space.',
              'error'
            );
          }
        );
      }
    });
  }
}

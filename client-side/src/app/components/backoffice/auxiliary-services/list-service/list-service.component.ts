import { Component, OnInit } from '@angular/core';
import { AuxiliaryService } from '../../../../core/models/auxiliaryService.model'; // Import your model
import { AuxiliaryServiceService } from '../../../../core/services/auxiliary-service.service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css'], // You can style it with CSS
})
export class ListServiceComponent implements OnInit {
  auxiliaryServices: AuxiliaryService[] = [];
    // Define properties for pagination
    itemsPerPage: number = 10;
    currentPage: number = 1;

  constructor(private auxiliaryServiceService:AuxiliaryServiceService) {}

  ngOnInit(): void {
    this.loadAuxiliaryServices();
  }

  loadAuxiliaryServices() {
    this.auxiliaryServiceService.getAuxiliaryServices().subscribe((services) => {
      this.auxiliaryServices = services;
      console.log('it works');
    });
  }

  deleteAuxiliaryService(id: number) {
    if (confirm('Are you sure you want to delete this service?')) {
      this.auxiliaryServiceService.deleteAuxiliaryService(id).subscribe((result) => {
        if (result) {
          // Service deleted successfully, refresh the list
          console.log(id);
          this.loadAuxiliaryServices();
        } else {
          // Handle deletion failure
          console.error('Service deletion failed.');
        }
      });
    }
  }

  getServiceTypeClass(serviceType: string): string {
    switch (serviceType) {
      case 'room_service':
        return 'service-type-room-service';
      case 'restaurant':
        return 'service-type-restaurant';
      case 'hospitality':
        return 'service-type-hospitality';
      case 'hotel_animation':
        return 'service-type-hotel-animation';
      default:
        return ''; // Return a default class if necessary
    }
  }
  toggleAvailability(id: number) {
    this.auxiliaryServiceService.toggleServiceAvailability(id).subscribe(
      (result) => {
        // Handle success (you can update the UI accordingly)
        console.log('Service availability toggled successfully.');
        this.loadAuxiliaryServices(); // Refresh the service list
      },
      (error) => {
        // Handle error
        console.error('Failed to toggle service availability.');
      }
    );
  }

}

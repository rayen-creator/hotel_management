import { Component, OnInit } from '@angular/core';
import { AuxiliaryService } from 'src/app/core/models/auxiliaryService.model';
import { ServiceReservation } from 'src/app/core/models/serviceReservation.model';
import { ServiceReservationService } from 'src/app/core/services/service-reservation.service';
import { AuxiliaryServiceService } from 'src/app/core/services/auxiliary-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-make-reservations',
  templateUrl: './make-reservations.component.html',
  styleUrls: ['./make-reservations.component.css']
})
export class MakeReservationsComponent implements OnInit {
  reservationForm: FormGroup;
  auxiliaryServices: AuxiliaryService[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private reservationService: ServiceReservationService,
    private auxiliaryServiceService: AuxiliaryServiceService,
  ) {}

  ngOnInit() {
    // Fetch the list of available AuxiliaryServices from your API
    this.auxiliaryServiceService.getAuxiliaryServices()
      .subscribe(auxiliaryServices => {
        this.auxiliaryServices = auxiliaryServices;
      });

    // Initialize the reservation form
    this.reservationForm = this.formBuilder.group({
      label: ['', Validators.required],
      serviceDate: [null, [Validators.required, this.dateValidator]],
      specialPreferences: [''],
      auxiliaryService: [null, Validators.required]
    });
  }

  // Custom date validator function
  dateValidator(control) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (selectedDate <= currentDate) {
      return { dateInvalid: true };
    }

    // get all the reservations for this service
    //compare the selectedDate to the rest of the reservations
    // send an error message

    return null;
  }

  submitReservation() {
    if (this.reservationForm.valid) {
      const serviceReservation: ServiceReservation = this.reservationForm.value;

      if (serviceReservation.auxiliaryService.available==true) {
        // Send the reservation to the API
        this.reservationService.createServiceReservation(serviceReservation)
          .subscribe(
            (reservation) => {
              this.showSuccessMessage('Reservation made successfully');
              this.reservationForm.reset();
              this.router.navigate(['/services/listReservations']);
            },
            (error) => {
              console.error('Error creating reservation:', error);
              this.toastr.error('This service is not available!', 'error');
            }
          );
      } else {
        // Display an error message as the service is not available
        this.toastr.error('This service is not available!', 'error');
      }
    }
  }



  showSuccessMessage(message: string) {
    this.toastr.success(message, 'Success');}

}

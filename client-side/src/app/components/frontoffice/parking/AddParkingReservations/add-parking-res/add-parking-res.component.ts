import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ParkingReservationService } from 'src/app/core/services/parkingreservation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ParkingService } from 'src/app/core/services/parking.service';
@Component({
  selector: 'app-add-parking-res',
  templateUrl: './add-parking-res.component.html',
  styleUrls: ['./add-parking-res.component.css'],
})
export class AddParkingResComponent {
  editMode: boolean = false;
  parkingReservation: any;
  parkingReservationForm: FormGroup;
  parkingSpaces: [];
  parkingEdit: any;

  constructor(
    private router: Router,
    private currentRoute: ActivatedRoute,
    private parkingReservationService: ParkingReservationService,
    private parkingSpaceService: ParkingService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    if (this.currentRoute.snapshot.params['id']) {
      this.editMode = true;
      this.parkingReservationService
        .getParkingReservation(this.currentRoute.snapshot.params['id'])
        .subscribe((res) => {
          console.log(res);
          this.parkingEdit = res;
          this.fillData(this.parkingEdit);
        });
    } else {
      this.fillData(null);
    }

    this.parkingSpaceService
      .getAllParkingSpaces()
      .subscribe((res) => (this.parkingSpaces = res as []));
  }

  fillData(data) {
    this.parkingReservationForm = this.formBuilder.group({
      guestName: [data?.guestName || '', Validators.required],
      vehicleImmatricule: [data?.vehicleImmatricule || '', Validators.required],
      arrivalDate: [data?.arrivalDate || null, Validators.required],
      departureDate: [data?.departureDate || null, Validators.required],
      parkingSpaceType: [data?.parkingSpace?.type || '', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.parkingSpaces);
    console.log(this.parkingReservationForm.get('parkingSpaceType').value);
    const filtredData = this.parkingSpaces.filter(
      (_v: any) =>
        _v.type === this.parkingReservationForm.get('parkingSpaceType').value &&
        _v.status === 'Available'
    );

    const newReservation = {
      guestName: this.parkingReservationForm.get('guestName').value,
      vehicleImmatricule:
        this.parkingReservationForm.get('vehicleImmatricule').value,
      arrivalDate: this.parkingReservationForm.get('arrivalDate').value,
      departureDate: this.parkingReservationForm.get('departureDate').value,
      parkingSpace: filtredData[Math.floor(Math.random() * filtredData.length)],
      owner: {
        email: 'emna@gmail.com',
        firstName: 'emna',
        lastName: 'taalouch',
        password: 'xxxx',
        role: 'client',
      },
    };

    if (!this.editMode)
      this.parkingReservationService
        .addParkingReservation(newReservation)
        .subscribe(
          (response) => {
            // Handle success, e.g., navigate to another page or display a success message.
            console.log('Reservation added successfully.');
          },
          (error) => {
            // Handle error, e.g., display an error message.
            console.error('Error adding reservation: ', error);
          }
        );
    else
      this.parkingReservationService
        .updateParkingReservation(
          this.currentRoute.snapshot.params['id'],
          newReservation
        )
        .subscribe(
          (response) => {
            // Handle success, e.g., navigate to another page or display a success message.
            console.log('Reservation updated successfully.');
          },
          (error) => {
            // Handle error, e.g., display an error message.
            console.error('Error updating reservation: ', error);
          }
        );
  }
}

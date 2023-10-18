import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ParkingSpace } from '../../../core/models/parking.model';
import { ParkingService } from '../../../core/services/parking.service';

@Component({
  selector: 'app-parking-form',
  templateUrl: './parking-form.component.html',
  styleUrls: ['./parking-form.component.css'],
})
export class ParkingFormComponent implements OnInit {
  parkingSpace: ParkingSpace;
  parkingForm: FormGroup;
  editMode: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private parkingService: ParkingService,
    private currentRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.currentRoute.snapshot.params['id']) {
      this.editMode = true;
      let id = this.currentRoute.snapshot.params['id'];
      this.parkingService.getParkingSpace(id).subscribe({
        next: (space: ParkingSpace) => {
          this.parkingSpace = space;
          this.initFormEdit();
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.initForm();
    }
  }

  private initForm() {
    this.parkingForm = this.formBuilder.group({
      spaceNumber: ['', [Validators.required]],
      type: ['', [Validators.required]],
      location: ['', [Validators.required]],
      status: ['Available', [Validators.required]],
    });
  }

  private initFormEdit() {
    this.parkingForm = this.formBuilder.group({
      spaceNumber: [this.parkingSpace.spaceNumber, [Validators.required]],
      type: [this.parkingSpace.type, [Validators.required]],
      location: [this.parkingSpace.location, [Validators.required]],
      status: [this.parkingSpace.status, [Validators.required]],
    });
  }

  onSubmit() {
    if (!this.editMode) {
      Swal.fire({
        title: 'Are you sure you want to add this parking space?',
        text: 'This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, add',
      }).then((result) => {
        if (result.isConfirmed) {
          let newParkingSpace = this.parkingForm.value;
          this.parkingService.addParkingSpace(newParkingSpace).subscribe();
          Swal.fire(
            'Added',
            'Parking space has been created successfully.',
            'success'
          );
          this.router.navigate(['adminpanel/parking']);
        }
      });
    } else {
      Swal.fire({
        title: 'Are you sure you want to update this parking space?',
        text: 'This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update',
      }).then((result) => {
        if (result.isConfirmed) {
          let id = this.currentRoute.snapshot.params['id'];
          let updatedParkingSpace = this.parkingForm.value;
          this.parkingService
            .updateParkingSpace(id, updatedParkingSpace)
            .subscribe();
          Swal.fire(
            'Updated',
            'Parking space has been updated successfully.',
            'success'
          );
          this.router.navigate(['adminpanel/parking']);
        }
      });
    }
  }
}

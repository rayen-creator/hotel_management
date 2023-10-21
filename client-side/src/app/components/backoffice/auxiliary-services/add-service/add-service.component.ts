import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl, ValidatorFn  } from '@angular/forms';
import { AuxiliaryServiceService } from '../../../../core/services/auxiliary-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


enum ServiceType {
  RoomService = 'room_service',
  Restaurant = 'restaurant',
  Hospitality = 'hospitality',
  HotelAnimation = 'hotel_animation',
}

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
})
export class AddServiceComponent implements OnInit {
  serviceForm: FormGroup;
  serviceTypes = Object.values(ServiceType);


  constructor(private formBuilder: FormBuilder, private auxiliaryServiceService: AuxiliaryServiceService,private toastr: ToastrService,private router: Router) {}

  ngOnInit(): void {
    this.initializeForm();
  }


  initializeForm() {
    // Create a custom validator for the 'label' field to check for letters only
    const letterOnlyValidator: ValidatorFn = (control: AbstractControl) => {
      const pattern = /^[a-zA-Z]+$/;
      if (control.value && !pattern.test(control.value)) {
        return { pattern: true };
      }
      return null;
    };

    this.serviceForm = this.formBuilder.group({
      serviceType: [null, Validators.required],
      label: ['', [Validators.required, letterOnlyValidator]],
      price: [0, [Validators.min(0)]],
      description: [''],
      available: [true],
      reason: [''],
    });
  }
  onSubmit() {
    if (this.serviceForm.valid) {
      this.auxiliaryServiceService.addAuxiliaryService(this.serviceForm.value).subscribe(
        (result) => {
          this.showSuccessMessage('Service added successfully');
          this.serviceForm.reset(); // Clear the form
          this.router.navigate(['/adminpanel/auxiliaryServices/listServices']);

        },
        (error) => {
          // Handle any errors
        }
      );
    }
  }
  showSuccessMessage(message: string) {
    this.toastr.success(message, 'Success');}

  }

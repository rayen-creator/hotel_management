import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuxiliaryService, ServiceType } from 'src/app/core/models/auxiliaryService.model';
import { AuxiliaryServiceService } from 'src/app/core/services/auxiliary-service.service';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {
  updateForm: FormGroup;
  service: AuxiliaryService; // Initialize this with the service you're updating
  serviceTypes = Object.values(ServiceType);

  constructor(private formBuilder: FormBuilder, private auxiliaryServiceService: AuxiliaryServiceService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.updateForm = this.formBuilder.group({
      id: [this.service.idAux_Service],
      serviceType: [this.service.serviceType, Validators.required],
      label: [this.service.label, Validators.required],
      price: [this.service.price, [Validators.min(0)]],
      description: [this.service.description],
      available: [this.service.available],
      reason: [this.service.reason],
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      // Extract the values from the form and update the service
      const updatedService: AuxiliaryService = this.updateForm.value;
      this.auxiliaryServiceService.updateAuxiliaryService(this.service.idAux_Service, updatedService).subscribe(
        (result) => {
          // Handle success
        },
        (error) => {
          // Handle error
        }
      );

  }

  }}

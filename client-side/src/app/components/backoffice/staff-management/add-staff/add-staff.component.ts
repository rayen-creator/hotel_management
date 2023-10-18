import { StaffService } from './../../../../core/services/staff.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/core/models/staff.model';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent {
  staffForm:FormGroup;
  staff:Staff;
  pattern = "^[ a-zA-Z][a-zA-Z]*$";
  patternphone = "^[0-9]{8}$";

  constructor(private router: Router,  private formBuilder: FormBuilder, private staffService: StaffService,  private currentRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.initForm()
  }

  private initForm() {
    this.staffForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.pattern(this.pattern), Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.pattern(this.pattern), Validators.minLength(3)]],
        email: ["", [Validators.required, Validators.email]],
        phone: ["", [Validators.required,  Validators.pattern(this.patternphone)]],
        role: ["", [Validators.required]],
      }
    )
  }
  onSubmit() {
    
      
            let newStaff = this.staffForm.value;
            console.log(newStaff)
            this.staffService.createStaff(newStaff).subscribe({
              next:()=>{
                this.router.navigate(['adminpanel/staff/listStaff']);
              },
              error:()=>{
        
              }
            });
           
          }
        
      
    
  
  
}

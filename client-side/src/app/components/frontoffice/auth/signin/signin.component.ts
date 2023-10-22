import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Valid, validateAllFormFields } from 'src/app/core/utils/custom-validators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formbuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    this.form = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

 

  Valid(controlname: any, Form: any) {
    return Valid(controlname, Form);
  }

  login() {
console.log("ss")
    if (this.form.valid) {
      this.authService.login(this.form.value);
    } else {
      validateAllFormFields(this.form);
    }
  }
}

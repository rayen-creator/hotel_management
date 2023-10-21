import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../../../core/services/item.service";
import {Router} from "@angular/router";
import {UserService} from "../../../../core/services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userForm: FormGroup;
  pattern = '^[ a-zA-Z0-9][a-zA-Z0-9 ]*$';
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router : Router) {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(this.pattern), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required] // New field for confirm password
    });

  }

  onSubmit() {
    Swal.fire({
      title: 'Are you sure you want to register?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, register',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.userForm.value.password !== this.userForm.value.confirmPassword) {
          Swal.fire('Error', 'Passwords do not match. Please try again.', 'error');
          return;
        }
        const newUser = this.userForm.value;
        this.userService.registerUser(newUser).subscribe(
          response => {
            Swal.fire('Registered', 'User has been registered successfully.', 'success');
          },
          error => {
            console.error(error);
            Swal.fire('Error', 'Registration failed. Please try again.', 'error');
          }
        );
      }
    });
  }

}

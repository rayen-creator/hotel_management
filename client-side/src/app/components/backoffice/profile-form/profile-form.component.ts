import { Component } from '@angular/core';
import {User} from "../../../core/models/user.model";
import {UserService} from "../../../core/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  user: User
  id: string
  userForm: FormGroup;

  pattern = "^[ a-zA-Z0-9][a-zA-Z0-9 ]*$";
  constructor(private userService: UserService, private router : Router, private currentRoute: ActivatedRoute, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.getUser();
  }

  private getUser() {
    this.id = this.currentRoute.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe({
      next: (user: User) => {
        this.user = user;
        this.initFormEdit()
        console.log(this.user);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  private initFormEdit() {
    let username: String = ""
    let email: String = ""

    const u = this.user
    username = u.username
    email = u.email


    this.userForm = this.formBuilder.group({
        username: [username, [Validators.required, Validators.pattern(this.pattern), Validators.minLength(3)]],
        email: [email, [Validators.required, Validators.email]],
      }
    )
  }


  onSubmit() {
      {
        Swal.fire({
          title: 'Are you sure you want to update your profile ?',
          text: 'This action cannot be undone.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, update',
        }).then((result) => {
          if (result.isConfirmed) {
            let newProfile = this.userForm.value;
            console.log(newProfile)
            this.userService.updateUser(this.id, newProfile).subscribe();
            Swal.fire('Updated', 'Profile has been updated successfully.', 'success');
            this.router.navigate([`adminpanel/profile/${this.id}`]);

          }
        });
      }
  }
}

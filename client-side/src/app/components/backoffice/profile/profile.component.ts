import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../core/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Item} from "../../../core/models/item.model";
import {User} from "../../../core/models/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user: User
  id: string
  constructor(private userService: UserService, private router : Router, private currentRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.getUser();
  }

  private getUser() {
    this.id = this.currentRoute.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe({
      next: (user: User) => {
        this.user = user;
        console.log(this.user);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

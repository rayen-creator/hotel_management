import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }
  username: any=null;
  status: boolean

  ngOnInit(): void {
    this.authService.getAuthStatusListener().subscribe((status) => {
      this.status = status;
      if (status) {
        this.authService.getUserListener().subscribe((data: User) => {
          console.log("u",data)
          this.username = data.username

        });
      }
    })

  }

  signout(){
    this.authService.signout();
  }

}

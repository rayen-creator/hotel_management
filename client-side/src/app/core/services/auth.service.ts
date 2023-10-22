import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from 'jwt-decode';
import { UserService } from './user.service';

import { BehaviorSubject } from "rxjs"
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment.development';
import { DecodedToken } from '../models/interface/decodedToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string;
  tokenTimer: any
  userSubs = new BehaviorSubject<User>(null);
  private tokenSubs = new BehaviorSubject<string>('');
  private authStatusListener = new BehaviorSubject<boolean>(false);
  private isUserAuthenticated = false;
  user: User;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private coockiesService: CookieService,
    private toastr: ToastrService,
    private userService: UserService,
  ) {
    this.url = environment.gateway_API;
  }

  getToken() {
    return this.tokenSubs.asObservable();
  }

  //http handler error
  handler(err: HttpErrorResponse) {
    this.toastr.error(err.error.message, `Error ${err.error.statusCode}`)
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  getUserListener() {
    return this.userSubs.asObservable();
  }

  private saveAuthData(token: any, exp: any) {
    const expirationDate = new Date(exp * 1000);  //convert to date

    const cookieOptions = {
      expires: expirationDate,
      path: '/',          //Set the path
      secure: true,       // Set the cookie to be secure (HTTPS-only)
      httpOnly: true,     // Set the HttpOnly flag to prevent JavaScript access
    };
    this.coockiesService.set("jwt", token, cookieOptions);
  }

  private clearCoockies() {
    this.coockiesService.delete("jwt", '/');
  }


  login(user: any) {
    return this.httpClient.post(`${this.url}/auth/signin`, user).subscribe({
      next: (res: any) => {
        const payload = jwt_decode(res.access_token) as DecodedToken;
        console.log('payload', payload)

        this.authStatusListener.next(true);

        this.saveAuthData(res.access_token, payload.exp);

        this.tokenSubs.next(res.access_token);

        this.userService.getUserByusername(payload.username).subscribe((data: User) => {

          this.userSubs.next(data);
          this.user = data;

          this.toastr.success("Welcome back ", "Logged In")

          if (this.user.userType == 'ADMIN') {
            this.router.navigate(['/adminpanel']);
          } else {
            this.router.navigate(['/home']);
          }

        })

      },
      error: (err: HttpErrorResponse) => {
        this.handler(err)
      }
    })
  }

  autoAuthUser() {
    // Initial token check
    this.checkForToken();
  }

  private checkForToken() {
    const token = this.coockiesService.get("jwt");
    if (!token) {
      // Token is not present or invalid
      console.log("token is not present")
      return;
    }

    const payload = jwt_decode(token) as DecodedToken;

    const expirationTimeInMillis = payload.exp;               //expirationDate
    const currentTimeInMillis = new Date().getTime() / 1000;  //currentdate

    if (expirationTimeInMillis < currentTimeInMillis) {
      // Token is expired
      console.log("tokenExpired")
      this.signout();

      this.toastr.info('session expired', 'logging out', {
        progressBar: true,
      });

    } else {
      console.log("go valid token");
      // Token is valid
      this.tokenSubs.next(token);
      this.userService.getUserByusername(payload.username).subscribe((data: User) => {
        this.userSubs.next(data);
      });
      this.setAuthTimer(expirationTimeInMillis);
      this.isUserAuthenticated = true;
      this.authStatusListener.next(true);
      // this.router.navigate(['/adminpanel'])

    }
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.signout();
    }, duration);
  }

  signout() {
    this.clearCoockies();
    this.authStatusListener.next(false);
    this.toastr.success("Logging out", "Goodbye", {
      progressBar: true,
    })
    this.router.navigate(['/signin'])
  }


}
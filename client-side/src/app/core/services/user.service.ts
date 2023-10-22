import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class UserService {

   private apiUrl = `${environment.gateway_API}/user`; // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  getAllUsers() {
    return this.http.get(`${this.apiUrl}/getAllUsers`);
  }

  getUserById(id: string) {
    return this.http.get(`${this.apiUrl}/getById/${id}`);
  }

  getUserByusername(username: string) {
    return this.http.get(`${this.apiUrl}/username/${username}`);
  }

  updateUser(id: string, user: any) {
    return this.http.put(`${this.apiUrl}/UpdateUser/${id}`, user);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.apiUrl}/deleteuser/${id}`);
  }
}

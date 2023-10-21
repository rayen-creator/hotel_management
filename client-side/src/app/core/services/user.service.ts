import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:7000/user'; // Adjust the URL as needed

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

  getUserByEmail(email: string) {
    return this.http.get(`${this.apiUrl}/email/${email}`);
  }

  updateUser(id: string, user: any) {
    return this.http.put(`${this.apiUrl}/UpdateUser/${id}`, user);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.apiUrl}/deleteuser/${id}`);
  }
}

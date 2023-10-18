import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  url: string
  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:8086/staff_management/api/staff";
  }

  createStaff(staff: any) {
    return this.httpClient.post(`${this.url}/add`, staff);
  }
  getStaff(id: any) {
    return this.httpClient.get(`${this.url}/getstaff/${id}`);
  }
  updateStaff(id: any, staff: any) {
    return this.httpClient.post(`${this.url}/edit/${id}`, staff);
  }
  getAllStaff() {
    return this.httpClient.get(`${this.url}/all`);
  }

  deleteStaff(id: number) {
    return this.httpClient.delete(`${this.url}/delete/${id}`);
  }
}

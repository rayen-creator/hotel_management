import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  url: string
  constructor(private httpClient: HttpClient) {

    this.url = `${environment.gateway_API}/staffmanagement/api/staff`;
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

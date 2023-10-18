import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ParkingService {
  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8084/parking/api';
  }

  addParkingSpace(parkingSpace: any) {
    return this.httpClient.post(`${this.url}/parking-space`, parkingSpace);
  }

  updateParkingSpace(id: string, parkingSpace: any) {
    return this.httpClient.put(`${this.url}/parking-space/${id}`, parkingSpace);
  }

  getAllParkingSpaces() {
    return this.httpClient.get(`${this.url}/parking-space/all`);
  }

  getParkingSpace(id: string) {
    return this.httpClient.get(`${this.url}/parking-space/${id}`);
  }

  deleteParkingSpace(id: string) {
    return this.httpClient.delete(`${this.url}/parking-space/${id}`);
  }
}

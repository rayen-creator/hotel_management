import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root',
})
export class ParkingReservationService {
  url: string;

  constructor(private httpClient: HttpClient) {
    this.url =  `${environment.gateway_API}/parking/api`;
  }

  addParkingReservation(reservation: any) {
    return this.httpClient.post(`${this.url}/parking-reservation`, reservation);
  }

  updateParkingReservation(id: string, reservation: any) {
    return this.httpClient.put(
      `${this.url}/parking-reservation/${id}`,
      reservation
    );
  }

  getAllParkingReservations() {
    return this.httpClient.get(`${this.url}/parking-reservation/all`);
  }

  getParkingReservation(id: string) {
    return this.httpClient.get(`${this.url}/parking-reservation/${id}`);
  }

  deleteParkingReservation(id: string) {
    return this.httpClient.delete(`${this.url}/parking-reservation/${id}`);
  }

  confirmParkingReservation(id: string) {
    return this.httpClient.put(
      `${this.url}/parking-reservation/${id}/confirm`,
      {}
    );
  }

  declineParkingReservation(id: string) {
    return this.httpClient.put(
      `${this.url}/parking-reservation/${id}/decline`,
      {}
    );
  }

  getReservationsForClient() {
    return this.httpClient.get(`${this.url}/client-reservations`);
  }
}

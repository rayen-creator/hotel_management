import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  url: string
  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:8086/reservation/api/reservation";
  }

  createReservation(idRoom:number,reservation: reservation) {
    return this.httpClient.post(`${this.url}/add/${idRoom}`, reservation);
  }
  updateReservation(id: any, reservation: any) {
    return this.httpClient.post(`${this.url}/update/${id}`, reservation);
  }
  getAll() {
    return this.httpClient.get(`${this.url}/getAll`);
  }
  
  getById(id:number){
    return this.httpClient.get(`${this.url}/getById/${id}`);
  }
  deleteReservation(id: number) {
    return this.httpClient.delete(`${this.url}/delete/${id}`);
  }

}

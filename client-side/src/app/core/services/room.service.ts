import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { roomType } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  url: string
  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:8086/reservation/api/room";
  }

  createRoom(idHotel:number,room: any) {
    return this.httpClient.post(`${this.url}/add/${idHotel}`, room);
  }
  updateRoom(id: any, room: any) {
    return this.httpClient.post(`${this.url}/update/${id}`, room);
  }
  getAll() {
    return this.httpClient.get(`${this.url}/getAll`);
  }
  
  getById(id:number){
    return this.httpClient.get(`${this.url}/getById/${id}`);
  }
  getByHotel(hotel:number){
    return this.httpClient.get(`${this.url}/getByHotel/${hotel}`);
  }
  getByType(type:roomType,hotel:number){
    return this.httpClient.get(`${this.url}/fingByType/${hotel}/${type}`);
  }
  deleteRoom(id: number) {
    return this.httpClient.delete(`${this.url}/delete/${id}`);
  }

}

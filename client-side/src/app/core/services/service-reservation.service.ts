import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceReservation } from './../models/serviceReservation.model';
@Injectable({
  providedIn: 'root'
})
export class ServiceReservationService {


    private baseUrl = 'http://localhost:8080'; // Replace with your Spring Boot backend URL

    constructor(private http: HttpClient) {}

    getAllServiceReservations(): Observable<ServiceReservation[]> {
      return this.http.get<ServiceReservation[]>(`${this.baseUrl}/controllerServiceReservation`);
    }

    getServiceReservationById(id: number): Observable<ServiceReservation> {
      return this.http.get<ServiceReservation>(`${this.baseUrl}/controllerServiceReservation/${id}`);
    }

    createServiceReservation(serviceReservation: ServiceReservation): Observable<ServiceReservation> {
      return this.http.post<ServiceReservation>(`${this.baseUrl}/controllerServiceReservation`, serviceReservation);
    }

    updateServiceReservation(id: number, updatedServiceReservation: ServiceReservation): Observable<ServiceReservation> {
      return this.http.put<ServiceReservation>(`${this.baseUrl}/controllerServiceReservation/${id}`, updatedServiceReservation);
    }

    deleteServiceReservation(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/controllerServiceReservation/${id}`);
    }

    getServiceReservationsByAuxiliaryServiceId(auxiliaryServiceId: number): Observable<ServiceReservation[]> {
      return this.http.get<ServiceReservation[]>(`${this.baseUrl}/controllerServiceReservation/byAuxiliaryServiceId/${auxiliaryServiceId}`);
    }
  }


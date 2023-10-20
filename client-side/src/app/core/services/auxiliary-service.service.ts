import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuxiliaryService } from './../models/auxiliaryService.model';

@Injectable({
  providedIn: 'root',
})
export class AuxiliaryServiceService {
  private baseUrl = 'http://localhost:8083/auxiliary_services/controllerAuxiliaryService'; // Corrected URL
  constructor(private http: HttpClient) {}

  getAuxiliaryServices(): Observable<AuxiliaryService[]> {
    return this.http.get<AuxiliaryService[]>(`${this.baseUrl}/all`);
  }

  getAuxiliaryServiceById(id: number): Observable<AuxiliaryService> {
    return this.http.get<AuxiliaryService>(`${this.baseUrl}/getAuxiliaryServiceById/${id}`);
  }

  addAuxiliaryService(service: AuxiliaryService): Observable<AuxiliaryService> {
    return this.http.post<AuxiliaryService>(`${this.baseUrl}/AddAuxiliaryService`, service);
  }

  updateAuxiliaryService(id: number, service: AuxiliaryService): Observable<AuxiliaryService> {
    return this.http.put<AuxiliaryService>(`${this.baseUrl}/${id}`, service);
  }

  deleteAuxiliaryService(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/deleteAuxiliaryService/${id}`);
  }
  toggleServiceAvailability(id: number): Observable<any> {
    const url = `${this.baseUrl}/toggleAvailability/${id}`;
    return this.http.put(url, null);
  }
}

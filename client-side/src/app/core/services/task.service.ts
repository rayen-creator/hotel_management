import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url: string
  constructor(private httpClient: HttpClient) {

    this.url =`${environment.gateway_API}/staffmanagement/api/tasks`;
  }

  addTaskToStaff(task: any,idstaff: any) {
    return this.httpClient.post(`${this.url}/add/${idstaff}`, task);
  }
  getTask(id: any) {
    return this.httpClient.get(`${this.url}/gettask/${id}`);
  }
  updateTask(id: any, task: any) {
    return this.httpClient.post(`${this.url}/edit/${id}`, task);
  }
  getAllTasksOfStaff(idstaff: any,) {
    return this.httpClient.get(`${this.url}/all/${idstaff}`);
  }

  deleteTask(id: number) {
    return this.httpClient.delete(`${this.url}/delete/${id}`);
  }
}

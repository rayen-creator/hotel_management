import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url: string
  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:8086/staff_management/api/tasks";
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

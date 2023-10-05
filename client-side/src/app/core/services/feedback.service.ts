import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  url: string
  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:8082/customer_review/api/feedback";
  }

  createFeedback(feedback: any) {
    return this.httpClient.post(`${this.url}`, feedback);
  }
  updateFeedback(id: any, feedback: any) {
    return this.httpClient.post(`${this.url}/${id}`, feedback);
  }
  getAll() {
    return this.httpClient.get(`${this.url}/all`);
  }

  deleteFeedback(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}

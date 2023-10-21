import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private dataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  url: string
  constructor(private httpClient: HttpClient) {
    this.url = `${environment.gateway_API}/api/feedback`;
  }

  getRefreshedData(){
    return this.dataSubject.asObservable();
  }

  createFeedback(feedback: any) {
    return this.httpClient.post(`${this.url}`, feedback);
  }

  respondeToFeedback(id: any, feedback: any) {
    return this.httpClient.put(`${this.url}/openReview/${id}`, feedback).subscribe((response:any) => {
      console.log('feedback',response);
      this.dataSubject.next([response]);
    })
  }

  chnageReviewStatus(id: any, feedback: any) {
    return this.httpClient.put(`${this.url}/${id}`, feedback).subscribe((response:any) => {
      this.dataSubject.next([response]);
    })
  }

  getAll() {
    return this.httpClient.get(`${this.url}/all`).subscribe((response:any) => {
      this.dataSubject.next(response);
    })
  }

  deleteFeedback(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}

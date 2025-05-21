import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private API_URL = 'http://localhost:5000/api/tasks'; // Update later if deployed

  constructor(private http: HttpClient) {}

  private getHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    };
  }

  getTasks() {
    return this.http.get(this.API_URL, this.getHeaders());
  }

  createTask(task: any) {
    return this.http.post(this.API_URL, task, this.getHeaders());
  }

  updateTask(id: string, task: any) {
    return this.http.put(`${this.API_URL}/${id}`, task, this.getHeaders());
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.API_URL}/${id}`, this.getHeaders());
  }
}


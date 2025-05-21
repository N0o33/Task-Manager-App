import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  register(user: any) {
    return this.http.post(`${this.API_URL}/register`, user);
  }

  login(user: any) {
    return this.http.post<{ token: string }>(`${this.API_URL}/login`, user);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}


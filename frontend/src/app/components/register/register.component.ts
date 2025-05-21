import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.user).subscribe({
      next: () => {
        alert('Registration successful. Please log in.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert('Registration failed: ' + err.error);
      }
    });
  }
}
// This code defines a RegisterComponent in Angular that handles user registration functionality.

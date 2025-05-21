import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tasks: any[] = [];
  newTask = { title: '', description: '' };

  constructor(private taskService: TaskService, public auth: AuthService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks as any[]);
  }

  addTask() {
    this.taskService.createTask(this.newTask).subscribe(() => {
      this.newTask = { title: '', description: '' };
      this.loadTasks();
    });
  }

  toggleTask(task: any) {
    this.taskService.updateTask(task._id, { ...task, completed: !task.completed }).subscribe(() => {
      this.loadTasks();
    });
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }
  logout() {
  this.auth.logout();
  alert('Logged out successfully');
}

}
// This code defines a DashboardComponent in Angular that handles task management functionality.

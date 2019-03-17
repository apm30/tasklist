import { Task } from './../models/Task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  public now: Date = new Date();

  ngOnInit(): void {
    this.tasks = [
      {
        name: 'Nazwa pierwszego zadania',
        description: 'Opis pierwszego zadania',
        owner: 'owner 1',
        createdTime: this.now,
        status: 1
      },
      {
        name: 'Nazwa drugiego zadania',
        description: 'Opis drugiego zadania 2',
        owner: 'owner 2',
        createdTime: this.now,
        status: 1
      },
      {
        name: 'Nazwa trzeciego zadania',
        description: 'Opis trzeciego zadania',
        owner: 'owner 3',
        createdTime: this.now,
        status: 1
      }
    ];
  }
  addTask(task: Task) {
    this.tasks.push(task);
  }
  showTaskDetails(task: Task) {
    console.log(task);
  }
}

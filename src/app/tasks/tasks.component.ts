import { Task } from './../models/Task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  ngOnInit(): void {
    this.tasks = [
      {
        name: 'name 1',
        description: 'description 1',
        owner: 'owner 1',
        completed: false
      },
      {
        name: 'name 2',
        description: 'description 2',
        owner: 'owner 2',
        completed: false
      },
      {
        name: 'name 3',
        description: 'description 3',
        owner: 'owner 3',
        completed: false
      }
    ];
  }
  addTask(task: Task) {
    this.tasks.push(task);
  }
}

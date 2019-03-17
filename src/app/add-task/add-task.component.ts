import { Task } from './../models/Task';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() addTask = new EventEmitter();
  name: string;
  owner: string;
  completed: boolean;
  constructor() {}
  onSubmit() {
    const task = {
      name: this.name,
      owner: this.owner,
      completed: false
    };
    this.addTask.emit(task);
  }
  ngOnInit() {}
}

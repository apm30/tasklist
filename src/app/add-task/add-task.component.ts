import { StatusEnum } from './../status-enum';
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
  description: string;
  completed: boolean;
  public now: Date = new Date();
  constructor() {}
  onSubmit() {
    const task = {
      name: this.name,
      description: this.description,
      owner: this.owner,
      createdDate: this.now,
      status: 0
    };
    this.addTask.emit(task);
  }
  ngOnInit() {}
}

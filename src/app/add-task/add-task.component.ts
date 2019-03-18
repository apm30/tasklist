import { StatusEnum } from './../status-enum';
import { Task } from './../models/Task';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NullTemplateVisitor } from '@angular/compiler';

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
  createdDate: Date;
  completedDate: Date;
  status: number;
  public now: Date = new Date();
  statusValues = StatusEnum;
  statusKeys(): Array<string> {
    const keys = Object.keys(this.statusValues);
    return keys.slice(keys.length / 2);
  }
  // ['status 1', 'status 2'];

  constructor() {}
  onSubmit() {
    const task = {
      name: this.name,
      description: this.description,
      owner: this.owner,
      createdDate: this.now,
      completedDate: null,
      status: 0
    };

    this.addTask.emit(task);
  }
  ngOnInit() {}
}

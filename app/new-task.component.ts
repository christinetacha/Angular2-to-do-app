import { Component, EventEmitter } from 'angular2/core'
import { Task } from './task.model'

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="task-form">
    <h3>Create Task:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <button (click)="addTask(userDescription)">Add</button>
  </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<string>;
  constructor() {
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement) {
    // var newTask = new Task(userDescription.value, 0);
    // this.onSubmitNewTask.emit(newTask);

    this.onSubmitNewTask.emit(userDescription.value);
    // userDescription.value = "";
  }

}

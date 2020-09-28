import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {TodoModel} from "../../models/todo-model";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.less']
})
export class AddTodoComponent {
  todo : TodoModel = new TodoModel();
  submitted = false;
  constructor(private todoService: TodoService) { }

  saveTodo(): void {
    const data = {
      title: this.todo.title,
      description: this.todo.description
    };

    this.todoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.error('Error occurred while creating the todo', error);
        });
  }

  newTodo(): void {
    this.submitted = false;
    this.todo = new TodoModel();
  }
}

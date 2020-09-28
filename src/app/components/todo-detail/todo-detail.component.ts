import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
             selector: 'app-todo-detail',
             templateUrl: './todo-detail.component.html',
             styleUrls: ['./todo-detail.component.less']
           })
export class TodoDetailComponent implements OnInit {

  currentTodo = null;
  message = '';

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getTodo(this.route.snapshot.paramMap.get('id'));
  }

  getTodo(id): void {
    this.todoService.get(id)
        .subscribe(
          data => {
            this.currentTodo = data;
            console.log(data);
          },
          error => {
            console.error('Error occurred while getting the todo', error);
          });
  }

  updatePublished(status): void {
    const data = {
      title: this.currentTodo.title,
      description: this.currentTodo.description,
      published: status
    };

    this.todoService.update(this.currentTodo.id, data)
        .subscribe(
          response => {
            this.currentTodo.published = status;
            console.log(response);
          },
          error => {
            console.error('Error occurred while changing the status', error);
          });
  }

  updateTodo(): void {
    this.todoService.update(this.currentTodo.id, this.currentTodo)
        .subscribe(
          response => {
            console.log(response);
            this.message = 'The todo was updated successfully!';
          },
          error => {
            console.error('Error occurred while updating the todo', error);
          });
  }

  /*deleteTodo(): void {
    this.todoService.delete(this.currentTodo.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/todos']);
        },
        error => {
          console.error('Error occurred while deleting the todo', error);
        });
  }*/

}

import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos!: Todo[];

  inputTodo:string = "";

  constructor() {}

  ngOnInit(){
    this.todos = [
      {
        content: 'first to do',
        completed: false,
      },
      {
        content: 'second to do',
        completed: false,
      },
    ];
  }

  toggleTodo(id:number) {
    this.todos.map((todo, i) => {
      if (i==id) todo.completed = !todo.completed;
      return todo
    })
  }

  deleteTodo(id:number) {
    this.todos = this.todos.filter((todo, i) => i !== id)
  }
}

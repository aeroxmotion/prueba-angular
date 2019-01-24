import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FetchTodosService } from '../fetch-todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  stringify = JSON.stringify

  formGroupTodo: FormGroup

  todos = []

  constructor(
    private $fetchTodosService: FetchTodosService,
    private $formBuilder: FormBuilder) {}

  ngOnInit() {
    this.$fetchTodosService.fetchTodos()
      .then((todos: any) => {
        this.todos = todos
      })

    this.formGroupTodo = this.$formBuilder.group({
      text: [
        'Hola mundo',
        Validators.compose([
          Validators.required,
          Validators.maxLength(30)
        ])
      ]
    })
  }

  showTheMoney (money) {
    console.log(`${money} budget bitches`)
  }

  saveTodo() {
    this.todos.push({
      text: this.formGroupTodo.value.text,
      done: false
    })
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: any

  @Output()
  showMeTheMoney = new EventEmitter()

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.showMeTheMoney.emit(1000000)
    }, 3000)
  }

}

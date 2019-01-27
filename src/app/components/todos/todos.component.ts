import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todos = []; // Все наши тудушки

  constructor() { }

  ngOnInit() { }

  /**
   * инициализируем тудушки в текущую компоненту
   */
  todosUiInit(todos: []) {
    this.todos = todos;
  }
}

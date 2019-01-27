import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css']
})
export class TodosFormComponent implements OnInit {
  @Output() todosStorage = new EventEmitter();
  public todos = []; // Все наши тудушки
  public newTodo = { // новая тудушка
    id: '',
    title: '',
    text: ''
  };

  constructor() { }

  ngOnInit(): void {
    // эмитим список тудушек
    this.todosStorage.emit(this.todos);
  }

  /**
   * добавление новой тудушки в общий список по сабмиту формы
   */
  public addNewTodo(form: NgForm): void {
    // генерируем id для новой тудушки
    this.newTodo.id = this.generateId();

    this.todos.push(Object.assign({}, this.newTodo));

    // очищаем форму
    form.resetForm();
  }

  /**
   * метод для генерации id
   */
  private generateId(): string {
    const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let id = '';

    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * words.length);
      id += words[index];
    }

    return id;
  }
}

import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { immutableSplice } from 'src/utils/array';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @ViewChild('todoInput', { static: false }) todoInput: ElementRef<
    HTMLInputElement
  >;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.setTitle('Todo list name');
  }

  private todoList: Todo[] = [];

  get todos(): Todo[] {
    return this.todoList;
  }

  addTodo(title: string): void {
    if (!title) {
      return;
    }
    this.todoList = [...this.todoList, Todo.create(title)];
    this.todoInput.nativeElement.value = '';
  }

  updateTodo(todo: Todo) {
    this.todoList = immutableSplice(
      this.todoList,
      this.todoList.findIndex(t => t.created === todo.created),
      1,
      todo
    );
  }

}

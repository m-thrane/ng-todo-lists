import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { List } from 'src/app/models/List';
import { Todo } from 'src/app/models/Todo';
import { immutableSplice } from 'src/utils/array';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-todo-list-overview',
  templateUrl: './todo-list-overview.component.html',
  styleUrls: ['./todo-list-overview.component.scss'],
})
export class TodoListOverviewComponent {
  @ViewChild('listInput', { static: false }) listInput: ElementRef<
    HTMLInputElement
  >;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.setTitle('Not Another Todo App!');
  }

  private listOverview: List[] = [];

  get lists(): List[] {
    return this.listOverview;
  }

  addList(title: string): void {
    if (!title) {
      return;
    }
    this.listOverview = [...this.listOverview, List.create(title)];
    this.listInput.nativeElement.value = '';
  }

  updateList(list: List) {
    this.listOverview = immutableSplice(
      this.listOverview,
      this.listOverview.findIndex(t => t.created === list.created),
      1,
      list
    );
  }

}

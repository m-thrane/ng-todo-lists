import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListOverviewComponent } from './components/todo-list-overview/todo-list-overview.component';

const routes: Routes = [
  {path: '', component: TodoListOverviewComponent,  data: { title: 'Not Another Todo Apps' } },
  {path: ':title', component: TodoListComponent,  data: { title: ':title' } },
]

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoListOverviewComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule {}

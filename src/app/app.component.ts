import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: String;
  get appTitle(): string {
    return this.title.getTitle();
  }
  constructor(private appService: AppService, title: Title) {
    title.setTitle('Not Another Todo App');
  }

  ngOnInit() {
    this.appService.getTitle().subscribe(appTitle => this.title = appTitle);
  }

}

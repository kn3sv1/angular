import { Component } from '@angular/core';

export interface Post {
    title: string,
    text: string,
    id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basics';
  number = 42;
  arr = [1, 1, 2, 3, 4, 5];
  inputValue = '';
  backgroundToggle = false;

  posts: Post[] = [
      {title: 'Title1', text: 'Text1', id: 1},
      {title: 'Title2', text: 'Text2', id: 2},
  ];

  constructor() {
  }

  onInput(event?: any) {
    // console.log('Event', event);
    this.inputValue = event.target.value;
  }
}

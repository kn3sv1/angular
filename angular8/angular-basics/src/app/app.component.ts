import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basics';
  number = 42;
  arr = [1,2,3];
  inputValue = ''

  constructor() {
  }

  onInput(event?: any) {
    //console.log('Event', event);
    this.inputValue = event.target.value;
  }
}

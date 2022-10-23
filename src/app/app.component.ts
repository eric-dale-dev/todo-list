import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'todo-list';
  tasks: string[] = [
    "Visit Brook",
    "Call Brook",
    "Take Brook on a date",
    "Drive to Brook's house",
    "Talk to Brook"
  ];
}

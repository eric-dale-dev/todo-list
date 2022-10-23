import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title: string = 'todo-list';
  tasks: Task[] = [
    new Task("Visit Brook"),
    new Task("Call Brook"),
    new Task("Take Brook on a date"),
    new Task("Drive to Brook's house"),
    new Task("Talk to Brook")
  ];

  add(newTask: string): void{
    this.tasks.push(new Task(newTask));
  }   

  remove(existingTask: Task): void{
    let userConfirmed = confirm(`Hey, WAIT! Are you 100% sure you want to remove the following task? \n "${existingTask}"`);
  
    if(userConfirmed){
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }

  markAsDone(task: Task){
    task.isDone = true;
  }

}

class Task {

  public isDone: boolean = false;

  constructor(public title: string){

  }

}

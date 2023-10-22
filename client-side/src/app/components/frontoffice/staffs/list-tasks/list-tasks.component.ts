import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/core/models/task.model';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent {
  constructor(private taskService: TaskService, private router: Router, private currentRoute: ActivatedRoute) { }

  listtasks: Task[]
  todayTasks: Task[] = [];
  tomorrowTasks: Task[] = [];
  tomorrow = new Date();
  today = new Date();
  ngOnInit(): void {
    //let idStaff = this.currentRoute.snapshot.params['id'];
    let idStaff = 1
    this.taskService.getAllTasksOfStaff(idStaff).subscribe((tasks: any) => {
      this.listtasks = tasks;
      console.log("listtasks",this.listtasks)

      // Set today and tomorrow to the current date
      this.today = new Date();
      this.tomorrow = new Date();
      this.tomorrow.setDate(this.tomorrow.getDate() );

      // Filter tasks for today
      
      this.todayTasks = this.listtasks.filter((task) => {
        return new Date(task.date).toDateString() === this.today.toDateString();
      });

      // Filter tasks for tomorrow
      
      this.tomorrow.setDate(this.tomorrow.getDate() + 1);
      this.tomorrowTasks = this.listtasks.filter((task) => {
        return new Date(task.date).toDateString() === this.tomorrow.toDateString();
      });
      
      
      // Sort tasks by time
      this.todayTasks.sort((a, b) => {
        const startTimeA = new Date(`2023-01-01 ${a.startTime}`);
        const startTimeB = new Date(`2023-01-01 ${b.startTime}`);
        return startTimeA < startTimeB ? -1 : 1;
      });

      this.tomorrowTasks.sort((a, b) => {
        const startTimeA = new Date(`2023-01-01 ${a.startTime}`);
        const startTimeB = new Date(`2023-01-01 ${b.startTime}`);
        return startTimeA < startTimeB ? -1 : 1;
      });
      console.log("today",this.today);
      console.log("tomorrow",this.tomorrow);
    })
  }

}

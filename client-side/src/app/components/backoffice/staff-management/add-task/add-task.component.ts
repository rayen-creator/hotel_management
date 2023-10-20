import { TaskService } from './../../../../core/services/task.service';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskform:FormGroup;

  constructor(private router: Router,  private formBuilder: FormBuilder, private taskService: TaskService,  private currentRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.initForm()
  }
  private initForm() {
    this.taskform = this.formBuilder.group({
      label: ["", [Validators.required]],
      toDo: ["", [Validators.required]],
      date: ["", [Validators.required, ]],
      startTime: ["", [Validators.required]],
      endTime: ["", [Validators.required]],
    }, {
      validators: []
    });
  }

  startTimeBeforeEndTime(control: AbstractControl): { [key: string]: boolean } | null {
    const startTime = control.get('startTime').value;
    const endTime = control.get('endTime').value;
  
    if (startTime >= endTime) {
      return { startTimeBeforeEndTime: true };
    }
  
    return null;
  }

  dateAfterToday(control: AbstractControl): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
  
    if (selectedDate <= today) {
      return { dateAfterToday: true };
    }
  
    return null;
  }
  onSubmit() {
    let newTask = this.taskform.value;
    console.log(newTask);
    let id = this.currentRoute.snapshot.params['id'];
    console.log(newTask)
    console.log(id)
    this.taskService.addTaskToStaff(newTask,id).subscribe({
      next:()=>{
        this.router.navigate(['adminpanel/staff/listTasks',id]);
      },
      error:()=>{

      }
    });
   
  }
}

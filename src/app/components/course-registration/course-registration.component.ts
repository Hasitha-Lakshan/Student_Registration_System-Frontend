import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Course } from '../../models/course.model';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-course-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './course-registration.component.html',
  styleUrl: './course-registration.component.css',
  providers: [ApiService]
})
export class CourseRegistrationComponent {
  @ViewChild('courseform')
  courseform!: NgForm;

  courseRegisterRequest: Course = {
    courseId: 0,
    courseName: " ",
    courseCode: " ",
    credits: 0,
    description: " ",
    lecturer: " ",
    selected: false
  };

  constructor(
    private apiService: ApiService,
    private toast: NgToastService){

  }

  addCourse() {
    this.apiService.addCourse(this.courseRegisterRequest)
    .subscribe({
      next: (course) => {
        this.courseform.resetForm();
        this.toast.success({detail:"SUCCESS",summary:"Course Registered! ",duration:3000});
      },
      error: (response) => {
      }
    })
  }

}

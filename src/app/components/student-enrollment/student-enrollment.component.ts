import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/studet.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-student-enrollment',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './student-enrollment.component.html',
  styleUrl: './student-enrollment.component.css',
  providers: [ApiService]
})
export class StudentEnrollmentComponent implements OnInit{
  students: Student[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getAllStudents()
    .subscribe({
      next: (students) => {
        //console.log(students);
        this.students = students;
      },
      error: (response) => {
        console.log(response);
      }
  });
  }
}

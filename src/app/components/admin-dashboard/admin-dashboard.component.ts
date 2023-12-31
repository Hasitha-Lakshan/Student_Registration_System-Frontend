import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from "@angular/material/card";


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [HttpClientModule,MatCardModule,MatGridListModule,RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
  providers:[HttpClient]
})
export class AdminDashboardComponent {

}

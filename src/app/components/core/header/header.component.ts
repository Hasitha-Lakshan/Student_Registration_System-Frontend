import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [StateService],
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false;

  constructor(private router: Router, private stateService: StateService) {}

  loginHandler() {
    if (this.isLogin) {
      this.stateService.setLoginStatus(false);
      this.router.navigate(['']);
      localStorage.clear();
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.stateService.loginStatus$.subscribe((value) => {
      this.isLogin = value;
    });
  }
}

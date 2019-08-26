import { Component } from '@angular/core';
import { User } from "./service/model/user/user.model";
import { AuthenticationService } from "./service/authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rnd';
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService)
    {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

}

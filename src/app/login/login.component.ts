import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public form: any = {};
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  public login() {
    this.authService.login(this.form.password).subscribe(resp => {
      if (resp) {
        this.router.navigate(['guest-portal']);
      } else {
        this.error = 'Invalid Password, please try again.';
      }
    });
  }
}

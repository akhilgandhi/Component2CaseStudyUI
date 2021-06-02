import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/login';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  login: Login;

  constructor(private router: Router, private authService: AuthService) { 
    this.login = new Login('', '');
  }

  ngOnInit(): void {
    this.authService.logOut();
  }

  authenticate() {
    this.login = new Login('admin', 'admin');
    console.log(`call auth service ....`);
    this.authService.authenticate(this.login).subscribe(
      (data: HttpResponse<Login>) => {
        this.authService.setBearerToken(`${data.headers.get('Authorization')}`);
        this.authService.setAuthentication(`true`);
        this.authService.setUserName('admin');
        if (this.authService.isAuthentication() === 'true') {
          this.router.navigate(['dashboard']);
        }
      }, err => {
        console.log('error....', err);
        alert(`${err.error.message}`);
        this.authService.setAuthentication(`false`);
      }
    );
  }
}

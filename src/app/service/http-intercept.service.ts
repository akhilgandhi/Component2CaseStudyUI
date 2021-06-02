import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptService implements HttpInterceptor {

  constructor(private router: Router, private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // bypass login api for bearer token header
    if (this.router.url !== '/dashboard' && this.router.url !== '/get-stock') {
      console.log(`router url -- ${this.router.url}`);
      request = request.clone({
        setHeaders: {
          Authorization: `${this.authService.getBearerToken()}`,
        }
      });
    }
    console.log('Intercepted');
    return next.handle(request);
  }
}

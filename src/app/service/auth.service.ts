import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from "../model/login";
import { map } from "rxjs/operators";
import { APIEndpoints } from "../helper/api-endpoints";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  authenticate(login: Login) {
    return this.httpClient.post<HttpResponse<Login>>(`${APIEndpoints.API_ENDPOINT_AUTH}`, login, { observe: 'response' as 'body'}).pipe(
      map(response => {
        console.log(response.headers.get('Authorization'));
        return response;
      })
    );
  }

  setBearerToken(token: string) {
    localStorage.setItem('Authorization', `${token}`);
  }

  getBearerToken() {
    return localStorage.getItem('Authorization');
  }

  isAuthentication() {
    return localStorage.getItem('authentication');
  }

  setAuthentication(authentication: string) {
    localStorage.setItem('authentication', authentication);
  }

  isUserLoggedIn(): boolean {
    const authFlag = localStorage.getItem('authentication');
    return authFlag !== null && authFlag === 'true' ? true : false;
  }

  logOut(): void {
    localStorage.clear();
  }

  setUserName(userName: string) {
    localStorage.setItem('user', userName);
  }
  
  getUserName() {
    return localStorage.getItem('user');
  }
}

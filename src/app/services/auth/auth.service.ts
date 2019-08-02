import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { Router } from "@angular/router";

const BASE_URL = 'https://api-dev.payments-platform.kestavarltd.com/';
// const httpOptions = {
//   header: new HttpHeaders({
//     '*': 'Access-Control-Allow-Origin',
//     'content-Type': 'Access-Control-Allow-Header'
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }


  public userLogin(value: any): Observable<any> {
    return this.httpClient.post(`${BASE_URL}login`, value).pipe(
      tap(data => localStorage.setItem('Token', data['Token'])),
      catchError(this.handleError)
      );
  }

  public userLogout() {
    localStorage.removeItem('token');
  }

  public isUserLogin(): boolean {
    return localStorage.getItem('Token') !== null;
  }

  private handleError (err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An Error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code : ${err.status}, error message is: ${err.message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

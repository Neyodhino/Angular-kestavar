import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";

const BASE_URL = 'https://api-dev.payments-platform.kestavarltd.com/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public userAuthentication(value: any): Observable<any> {
    console.log(value);
    return this.httpClient.post(`${BASE_URL}login`, value).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
      );
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

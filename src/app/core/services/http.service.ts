import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getData<T>(url: string): Observable<T> {
    return this.http.get<T>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  public addData<T>(url: string, body: Partial<T>): Observable<T> {
    return this.http.post<T>(url, body)
      .pipe(
        catchError(this.handleError)
      );
  }

  public removeData<T>(url: string): Observable<T> {
    return this.http.delete<T>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    const errorMessage: string = error.error instanceof ErrorEvent
      ? `An error occurred: , ${error.error.message}`
      : `Backend returned code ${error.status}, body was: ${error.error}`;

    console.error(errorMessage);

    return throwError('Something bad happened; please try again later.');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(url).pipe(
      catchError(err => {
        console.log(err);
        return err;
      })
    );
  }

  post(url: string, body: any): Observable<any> {
    return this.http.post(url, body).pipe(
      catchError(err => {
        console.log(err);
        return err;
      })
    );
  }

  put(url: string, body: any): Observable<any> {
    return this.http.put(url + body.id, body).pipe(
      catchError(err => {
        console.log(err);
        return err;
      })
    );
  }

  delete(url: string, id: string): Observable<any> {
    return this.http.delete(url + id).pipe(
      catchError(err => {
        console.log(err);
        return err;
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';



let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private dataSource = new Subject<any>();
  data$ = this.dataSource.asObservable();

  passData(data) {this.dataSource.next(data)}

   url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> { return this.http.get(this.url + 'data', httpOptions) }
  getImportantValues(): Observable<any> { return this.http.get(this.url + 'important_values', httpOptions) }

  


}

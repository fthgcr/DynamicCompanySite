import { Inject, Injectable } from '@angular/core';
import { adminMenu } from '../models/adminMenu';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminMenuService {

  BaseUrl: String = "http://localhost:3000/menu";

  constructor(
    private http: HttpClient,
    @Inject('apiUrl') private apiUrl
    

  ) { }


  // LIST
  get() {
    return this.http.get<adminMenu[]>(this.apiUrl + "/menu");
  }

  // INSERT  
  create(adminMenu: adminMenu): Observable<Object> {
    return this.http.post(this.apiUrl + "/menu", adminMenu);
  }

  getById(id: number): Observable<adminMenu> {
    return this.http.get<adminMenu>(this.apiUrl + "/menu/" + id);
  }

  update(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.BaseUrl}/${id}`, value);
  }

}

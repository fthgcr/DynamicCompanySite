import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminSlider } from '../models/adminSlider';

@Injectable({
  providedIn: 'root'
})
export class AdminSliderService {

  BaseUrl: String = "https://cors-anywhere.herokuapp.com/https://service.toflabs.com/api/Slider";

  constructor(
    private http: HttpClient,
    @Inject('apiUrl') private apiUrl


  ) { }


  // LIST
  get() {
    return this.http.get<adminSlider[]>(this.apiUrl + "/slider");
  }

  // INSERT  
  create(adminSlider: adminSlider): Observable<Object> {
    return this.http.post(this.apiUrl + "/slider", adminSlider);
  }

  getById(id: number): Observable<adminSlider> {
    return this.http.get<adminSlider>(this.apiUrl + "/slider/" + id);
  }

  update(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.BaseUrl}/${id}`, value);
  }

  //DELETE
  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/slider/${id}`, { responseType: 'text' });
  }

}

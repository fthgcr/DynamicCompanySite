import { Injectable } from '@angular/core';
import { user } from '../models/user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  BaseUrl: String = "https://cors-anywhere.herokuapp.com/https://service.toflabs.com/api/User";
  
 
  constructor(
    private http: HttpClient
  ) { }

  // INSERT  
  create(user: user): Observable<Object> {
    return this.http.post(this.BaseUrl + "/", user);
  }


  getByMail(userName: any, userPassword: any): Observable<user> {
    return this.http.get<user>(this.BaseUrl + "/" + "Login/" + userName + "/" + userPassword)
                    .pipe(catchError (this.errorHandler));
  }

  errorHandler(error){
    return throwError(error.message || "Server Error")
  }

}

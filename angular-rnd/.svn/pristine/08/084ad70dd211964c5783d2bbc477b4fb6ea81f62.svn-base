import { Injectable } from '@angular/core';
import { UserResponse } from "./model/user/user.response.model";
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import ServiceUtils from './util/service.util';
import { User } from './model/user/user.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): User{
     return this.currentUserSubject.value;
   }

   public test():Observable<any>{
    return this.http.get<any>(ServiceUtils.hostUrl + '/api/auth/test');
   }

   login(email: string, password: string): Observable<any> {
     console.log(`${ServiceUtils.hostUrl}/api/auth/login`);
     return this.http.post<any>(ServiceUtils.hostUrl + '/api/auth/login', 
      {
        "email": email, 
        "password": password
      }, httpOptions).pipe(map(userResponse=>{
          console.log(userResponse);
          if(userResponse.user && userResponse.user.token){
            localStorage.setItem('currentUser', JSON.stringify(userResponse.user));
            this.currentUserSubject.next(userResponse.user);
          }
          return userResponse.user;
        }));
   }

   logout(){
     localStorage.removeItem('currentUser');
     this.currentUserSubject.next(null);
   }
}

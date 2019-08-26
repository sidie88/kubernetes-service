import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Member } from '../clazz/member';

const endpoint = 'http://localhost:8080';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllMembers(): Observable<any> {
    return this.httpClient.get<any>(endpoint + '/getMembers');
  }

  public getMember(id: number): Observable<any> {
    return this.httpClient.get<any>(endpoint + '/getMember/' + id);
  }

  public addMember(member: Member): Observable<any> {
    return this.httpClient.post<any>(endpoint + '/addMember', JSON.stringify(member), httpOptions).pipe(
      tap((product) => console.log(`added member with id=${product.id}`)),
      catchError(this.handleError<any>('addMember'))
    );
  }

  public updateMember(id: number, member: Member): Observable<any> {
    return this.httpClient.put<any>(endpoint + '/updateMember/' + id, JSON.stringify(member), httpOptions).pipe(
      tap(_ => console.log(`updated member with id=${id}`)),
      catchError(this.handleError<any>('updateMember'))
    );
  }

  public deleteMember(id: number): Observable<any> {
    return this.httpClient.delete<any>(endpoint + '/deleteMember/' + id, httpOptions).pipe(
      tap(_ => console.log(`deteled member with id=${id}`)),
      catchError(this.handleError<any>('deleteMember'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

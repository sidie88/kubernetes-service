import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';



export default class ServiceUtils{
    constructor(){}

    static hostUrl = "http://localhost:8080";
    // static hostUrl = "http://192.168.0.100:3000";

    static extractData(res: Response) {
        let body = res;
        return body || { };
      }
    
      static handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
      };

}
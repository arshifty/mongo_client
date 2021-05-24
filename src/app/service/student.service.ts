import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stu } from '../model/stu';
import { User } from '../model/User';
import { catchError, map, tap } from 'rxjs/operators';


const baseUrl = 'http://localhost:3006/user';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  readonly heroesUrl = 'http://localhost:3006/user';  // URL to web api

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<User[]> {
    return this.http.get<User[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes'))
      ) as Observable<User[]>;
  }

   handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
       `server returned code ${error.status} with body "${error.error}"`;

      // TODO: better job of transforming error for user consumption
      throw new Error(`${operation} failed: ${message}`);
    };

  }

  private log(message: string) {
    console.log('HeroService: ' + message);
  }

  getStuData() {
    return (this.http.get(baseUrl));
  }

  getObservableData() {
     return of('observable value');
   
  }

  getUsers(): Stu[] {
    return [
      {
        name: 'user1',
        surname: 'usersurname1',
      },
      {
        name: 'user2',
        surname: 'usersurname2'
      },
      {
        name: 'user3',
        surname: 'usersurname3'
      }
    ];
  }

}

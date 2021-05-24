import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Stu } from '../model/stu';
import { User } from '../model/User';

// re-export for tester convenience


import { asyncData } from './async-observable-helpers';
import { StudentService } from './student.service';
import { getTestHeroes } from './test-heroes';

@Injectable()
/**
 * FakeHeroService pretends to make real http requests.
 * implements only as much of HeroService as is actually consumed by the app
 */
export class TestHeroService  {

  constructor(private http: HttpClient) {

  }

  heroes = getTestHeroes();
  lastResult: Observable<any>; // result from last method call

 

  getHeroes(): Observable<User[]> {
    return this.lastResult = asyncData(this.heroes);
  }

  getStuData() {
    return (this.http.get("baseUrl"));
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
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:3006/user';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getStuData() {
    return this.http.get(baseUrl);
  }


  getUsers(): any {
    return [
      {
        name: 'user1',
        surname: 'usersurname1'
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

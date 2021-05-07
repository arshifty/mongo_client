import { TestBed } from '@angular/core/testing';
import { UserServiceService } from './user-service.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../model/User';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

describe('UserServiceService', () => {
  let service: UserServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserServiceService],
      imports: [
        HttpClientTestingModule,
      ]

    });
    service = TestBed.inject(UserServiceService);
    service = TestBed.get(UserServiceService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll() should http GET ', () => {
    const dummyPosts: User[] = [{
      userName: 'ashif',
      contact: 1521466521,
      password: 'password',
      city: 'uuu uuu',
      country: 'yyy yyyy',
      code: 'yyyy'
    },
    {
      userName: 'mokbul',
      contact: 1845041010,
      password: 'qqqq',
      city: 'barisal',
      country: 'bd',
      code: '4600'
    }];

    service.getAll().subscribe((res) => {
    //  console.log("res", res);
      expect(res).toEqual(dummyPosts);
    });

    const req = httpMock.expectOne('http://localhost:3006/user');
    expect(req.request.method).toEqual("GET");
    req.flush(dummyPosts);
  });

  it('should add an user and return it HTTP POST', () => {
    const dummyPosts: User[] =[   {
      userName: 'aminul islam',
      contact: 125485698,
      password: 'asasas',
      city: 'kurigram',
      country: 'bd',
      code: '5600'
    }]

    service.create(dummyPosts).subscribe(
      data => 
      expect(data).toEqual(dummyPosts, 'should return the user')     
    );
  
    const req = httpMock.expectOne('http://localhost:3006/user');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(dummyPosts);

    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: dummyPosts });
    req.event(expectedResponse);
  });

  it('should delete the correct data', () => {
    service.delete(3).subscribe((data: any) => {
      expect(data).toBe(3);
    });
  
    const req = httpMock.expectOne(
      `http://localhost:3006/user/3`
    );
    expect(req.request.method).toBe('DELETE');
  
    req.flush(3);
    
  });

});

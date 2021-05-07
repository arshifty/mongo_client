import { ComponentFixture, fakeAsync, TestBed, tick, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ViewComponent } from './view.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DOMHelper } from 'src/app/testing/dom-helper';
import { UserServiceService } from '../../service/user-service.service';
import { of } from 'rxjs';
import { Location, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { User } from 'src/app/model/User';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;
  let dh: DOMHelper<ViewComponent>;
  let userServicesMoc: any;
  let service: UserServiceService;
  let httpMock: HttpTestingController;



  beforeEach(async () => {

    userServicesMoc = jasmine.createSpyObj('UserServiceService', ['getData']);
    userServicesMoc.getData.and.returnValue([]);

    await TestBed.configureTestingModule({
      declarations: [ViewComponent, DummyComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(
          [
            { path: 'add', component: DummyComponent },
            { path: 'settings/ashif/edit/:item', component: DummyComponent }
          ]
        ),
        CommonModule,
        HttpClientModule
      ],
      providers:
        [
          UserServiceService,
          { provide: UserServiceService, useValue: userServicesMoc },
          { provide: UserServiceService, useClass: UserServiceServiceStub }
        ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    dh = new DOMHelper(fixture);
    fixture.detectChanges();
   
    service = TestBed.inject(UserServiceService);
    service = TestBed.get(UserServiceService);
    httpMock = TestBed.get(HttpTestingController);

  });


  it('does test promise',
    inject([UserServiceService], async (myService: UserServiceService) => {
      const result = await myService.getAll();
      expect(result).not.toBeNull();
    })
  )

  it('show a services how it works', fakeAsync(() => {

    let serve = fixture.debugElement.injector.get(UserServiceService);
    let stub = spyOn(serve, 'getAll').and.callFake(() => {
      return of([]);
    })
    component.viewData();
    tick();
    expect(component.userValue).toEqual([]);

  }))

  it('should go to url',
    async(inject([Router, Location], (router: Router, location: Location) => {
      let fixture = TestBed.createComponent(ViewComponent);
      fixture.detectChanges();
      fixture.debugElement.query(By.css('.aaa')).nativeElement.click();
      fixture.whenStable().then(() => {
        // expect(location.path()).toEqual('/settings/'+component.collName+'/edit/1');
        expect(location.path()).toEqual('/settings/ashif/edit/1');
      });
    })));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain registrationForm  as FormGroup', () => {
    expect(component.registrationForm).not.toBeNull();
  })

  it('should contain user name  in  registrationForm', () => {
    expect(component.registrationForm.value.userName).toBe('');
  })

  it('should contain contact  in  registrationForm', () => {
    expect(component.registrationForm.value.val).toBe('');
  })

  it('should contain password  in  registrationForm', () => {
    expect(component.registrationForm.value.password).toBe('');
  })

  it('should contain a view  method ', () => {
    const result = component.viewData();
    expect(result).not.toBeNull()
  })

  it('should contain update method for update data  ', () => {
    const result = component.updateUser;
    expect(result).not.toBeNull()
  })

  it('should contain edit method for edit data  ', () => {
    const result = component.editUser;
    expect(result).not.toBeNull()
  })

  it('should contain delete method for delete data  ', () => {
    const result = component.deleteUser;
    expect(result).not.toBeNull()
  })

  it('at the begening the submit variable should be true  ', () => {
    const result = component.submitted;
    expect(result).toEqual(true);
  })

  it(' user data should not be null  ', () => {
    const result = component.userValue;
    expect(result).not.toBeNull();
  })


  it('should contain minimum one table  ', () => {
    expect(dh.countData('table')).toBeGreaterThan(0);
  })

  it('should have User List in the top of the page of H4 elemet ', () => {
    const headings = fixture.debugElement.queryAll(By.css('h4'));
    const native: HTMLElement = headings[0].nativeElement;
    expect(native.textContent).toBe('User List')
  })





});

class UserServiceServiceStub {
  getAll() {
    return of();
  }


}

// class TestComponent {
//   collName = 'ashif';
//   item = {
//     _id: 1
//   };
// }


@Component({ template: '' })
class DummyComponent { }


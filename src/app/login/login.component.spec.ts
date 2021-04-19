import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { DOMHelper } from '../testing/dom-helper';
import { UserServiceService } from '../service/user-service.service';
import { LoginComponent } from './login.component';
import { of } from 'rxjs';
// import { Router } from '@angular/router';
// import { Component } from '@angular/core';
// import { Location } from '@angular/common';
// import { routes } from '../app-routing.module'


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let dh: DOMHelper<LoginComponent>;
  let userServicesMoc: any;

  // let location: Location;
  // let router: Router;

  beforeEach(async () => {

    userServicesMoc = jasmine.createSpyObj('UserServiceService', ['userLOgin']);
    userServicesMoc.userLOgin.and.returnValue([]);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
       // RouterTestingModule.withRoutes(routes)

      ],
      providers:
        [
          { provide: UserServiceService, useValue: userServicesMoc },
          { provide: UserServiceService, useClass: UserServiceServiceStub }
        ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dh = new DOMHelper(fixture);
  });

  // it('navigate to "" redirects you to /home', fakeAsync(() => {
  //   router = TestBed.get(Router);
  //   location = TestBed.get(Location);
  //   router.navigate(['']);
  //   tick();
  //   expect(location.path()).toBe('/home');
  // }));


  it('should contain loginForm as FormGroup name', () => {
    expect(component.loginForm).not.toBeNull();
  })

  it('should contain email in  loginForm', () => {
    expect(component.loginForm.value.email).toBe('aaa@gmail.com');
  })

  it('should contain a password in  loginForm ', () => {
    expect(component.loginForm.value.password).toBe('');
  })


  it('should contain onSubmit method ', () => {
    const result = component.onSubmit();
    expect(result).not.toBeNull()
    // expect(component.onSubmit()).toBeTruthy;
  })

  it('should contain login in h3 tag ', () => {
    expect(dh.singleText('h3')).toBe('Login')
  })

  it('should contain  button', () => {
    expect(dh.countData('button')).toBeTruthy();

  })

  it('should have a label name Enter email', () => {
    const labels = fixture.debugElement.queryAll(By.css('label'));
    const nativeLabels = labels[0].nativeElement;
    expect(nativeLabels.textContent).toBe('Enter Email :')
    // expect(dh.singleText('label')).toBe('Enter Email :')
  })

  it('should have a label name Enter Password :', () => {
    const labels = fixture.debugElement.queryAll(By.css('label'));
    const nativeLabels = labels[1].nativeElement;
    expect(nativeLabels.textContent).toBe('Enter Password :')
  })

  it('should have a button named Log In ', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = buttons[0].nativeElement;
    expect(nativeButton.textContent).toBe('Log In');
  });

  it('should have a button named Back ', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = buttons[1].nativeElement;
    expect(nativeButton.textContent).toBe('Back');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


class UserServiceServiceStub {
  userLOgin() {
    return of();
  }
}

// @Component({ template: '' })
// class DummyComponent { }
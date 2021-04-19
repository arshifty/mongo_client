import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ViewComponent } from './view.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DOMHelper } from 'src/app/testing/dom-helper';
import { UserServiceService } from '../../service/user-service.service';
import { of } from 'rxjs';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;
  let dh: DOMHelper<ViewComponent>;
  let userServicesMoc: any;

  beforeEach(async () => {

    userServicesMoc = jasmine.createSpyObj('UserServiceService', ['getData']);
    userServicesMoc.getData.and.returnValue([]);

    await TestBed.configureTestingModule({
      declarations: [ViewComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(
          [
            { path: 'add', component: DummyComponent },
          ]
        )
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
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    dh = new DOMHelper(fixture);
    fixture.detectChanges();
  });

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
    const native : HTMLElement= headings[0].nativeElement;
    expect(native.textContent).toBe('User List')
  })

  // it('should have a button abc', () => {
  //   fixture.detectChanges();
  //   const nativeButton = fixture.nativeElement
  //   expect(nativeButton.querySelector(".sss  .some").textContent).toContain("Edit");
  // });



  // it('the title component', () => {
  //   const h1 = fixture.nativeElement.querySelector('h1');
  //   expect(h1.textContent).toContain(component.title);
  // });


});

class UserServiceServiceStub {
  getAll() {
    return of();
  }


}

@Component({ template: '' })
class DummyComponent { }

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StudentService } from '../service/student.service';
import { StudentComponent } from './student.component';
import * as Rx from 'rxjs';
import { delay } from "rxjs/operators";


describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentComponent],
      imports: [
        HttpClientTestingModule,
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      // providers: [
      //   { provide: UserService, useClass: UserServiceMock }
      // ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 3 user`, async(() => {
    expect(component.users.length).toEqual(3);
  }));

  it(`html should render one user`, async(() => {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('p');
    expect(el.innerText).toContain('user1');
  }));


  it(`html should render  user 2 `, async(() => {
    fixture.detectChanges();
    let users = fixture.debugElement.queryAll(By.css('p'));
    let native :HTMLElement = users[1].nativeElement
    expect(native.innerText).toContain('user2');
  }));

});

import { TestBed, async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { UserServiceService } from 'src/app/service/user-service.service';
import * as Rx from 'rxjs';
import { delay } from "rxjs/operators";
import { RouterLinkTestComponent } from './router-link-test.component';

describe('RouterLinkTestComponent', () => {
  let component: RouterLinkTestComponent;
  let fixture: ComponentFixture<RouterLinkTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterLinkTestComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers : [
        UserServiceService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterLinkTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call ngOnInit', () => {
    const fixture = TestBed.createComponent(RouterLinkTestComponent);
    const component = fixture.debugElement.componentInstance;
    let spy_getPostDetails = spyOn(component,"getPostDetails").and.returnValue([]);
    component.ngOnInit();
    expect(component.postDetails).toEqual([]);
  })

  it('should call getPostDetails and get response as empty array', fakeAsync(() => {
    const fixture = TestBed.createComponent(RouterLinkTestComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(UserServiceService);
    let spy_getPosts = spyOn(service,"getPosts").and.callFake(() => {
      return Rx.of([]).pipe(delay(100));
    });
    component.getPostDetails();
    tick(100);
    expect(component.postDetails).toEqual([]);
  }))

  it('should call getPostDetails and get response as array', fakeAsync(() => {
    const fixture = TestBed.createComponent(RouterLinkTestComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(UserServiceService);
    let spy_getPosts = spyOn(service,"getPosts").and.callFake(() => {
      return Rx.of([{postId : 1}]).pipe(delay(2000));
    });
    component.getPostDetails();
    tick(1000);   
    expect(component.showLoadingIndicator).toEqual(true);    
    tick(1000);
    expect(component.showLoadingIndicator).toEqual(false);
    expect(component.postDetails).toEqual([{postId : 1}]);
  }))
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ShowCustomerComponent } from './show-customer.component';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { LoadingService } from 'src/app/loading/loading.service';
import { By } from '@angular/platform-browser';
import { CssSelector } from '@angular/compiler';

describe('ShowCustomerComponent', () => {
  let component: ShowCustomerComponent;
  let fixture: ComponentFixture<ShowCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowCustomerComponent],
      imports: [
        HttpClientTestingModule,
      ],
      providers:
        [
          { provide: LoadingService, useClass: ProvideServicesStub }
        ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have green background', () => {
  //   const val = fixture.debugElement.query(By.css(".boy"));
  //   let native : HTMLElement = val.nativeElement;
  //  // expect(getComputedStyle(native).color).toEqual('chartreuse');
  //   expect(native.style.position).toEqual('fixed')
  //   //expect(native.style.top).toBe('0px') 
  // });

  it('should have green background', () => {
    const val = fixture.debugElement.query(By.css(".boy .aa .bb .cc h2"));
    let native: HTMLElement = val.nativeElement;
    expect(native.textContent).toEqual('hello')
  });

  it('should have skyblue <h2>', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('.buy');
    const bgColor = h2.style.width;
    expect(bgColor).toEqual('50%');
  });

});

class ProvideServicesStub {
  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    return of()
  }
}
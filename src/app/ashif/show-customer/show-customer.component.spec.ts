import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ShowCustomerComponent } from './show-customer.component';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { LoadingService } from 'src/app/loading/loading.service';

describe('ShowCustomerComponent', () => {
  let component: ShowCustomerComponent;
  let fixture: ComponentFixture<ShowCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCustomerComponent ],
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
});


class ProvideServicesStub {  
  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    return of() 
  }
}
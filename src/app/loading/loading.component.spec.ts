import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingService } from './loading.service';
import { LoadingComponent } from './loading.component';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';


describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingComponent],
      providers:
        [
          { provide: LoadingService, useClass: ProvideServicesStub }
        ]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
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
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {LoadingService} from '../../loading/loading.service';
import { ShowComponent } from './show.component';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

describe('ShowComponent', () => {
  let component: ShowComponent;
  let fixture: ComponentFixture<ShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowComponent],
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
    fixture = TestBed.createComponent(ShowComponent);
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
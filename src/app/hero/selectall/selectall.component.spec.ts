import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { SelectallComponent } from './selectall.component';

describe('SelectallComponent', () => {
  let component: SelectallComponent;
  let fixture: ComponentFixture<SelectallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectallComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

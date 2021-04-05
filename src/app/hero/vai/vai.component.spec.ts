import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaiComponent } from './vai.component';

describe('VaiComponent', () => {
  let component: VaiComponent;
  let fixture: ComponentFixture<VaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, fakeAsync, TestBed, TestComponentRenderer, tick } from '@angular/core/testing';
import { ReactiveFormTestComponent } from './reactive-form-test.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('ReactiveFormTestComponent', () => {
  let component: ReactiveFormTestComponent;
  let fixture: ComponentFixture<ReactiveFormTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveFormTestComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule

      ],
      providers:
        [
          // { provide: ToastrService, useClass: ToasterStub },
          // { provide: TestComponentRenderer, useClass: DOMTestComponentRenderer }

        ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call test() method', () => {
    const onClickMock = spyOn(component, 'test');
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should call onSubmit() method', () => {
    let mock = spyOn(component, 'onSubmit');
    let submitButton: DebugElement =
      fixture.debugElement.query(By.css('button[type=submit]'));
    fixture.detectChanges();
    submitButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(mock).toHaveBeenCalledTimes(0);
  });


  it('should click Set button', async(() => {
    fixture.detectChanges();
    let buttonElement = fixture.debugElement.query(By.css('.set-button'));
    let p = fixture.debugElement.nativeElement.querySelector('.this-p-tag');

    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.personName).toBe('Mahesh');
      expect(p.textContent).toBe('Mahesh');
    });
  }));

// using async
  it('should click Send button with async', async(() => {
    let buttonElement = fixture.debugElement.query(By.css('.send-button'));
      
    spyOn(component, 'sendData');
    //Trigger click event after spyOn
    buttonElement.triggerEventHandler('click', null);
  
    fixture.whenStable().then(() => {
      expect(component.sendData).toHaveBeenCalled();
    });
  })); 

// using fake async 
  it('should click Send button with fakeAsync', fakeAsync(() => {
    let buttonElement = fixture.debugElement.query(By.css('.send-button'));
      
    spyOn(component, 'sendData');
    //Trigger click event after spyOn
    buttonElement.triggerEventHandler('click', null);
      
    tick();
    expect(component.sendData).toHaveBeenCalled();
  })); 

  //edit button 
  it('should click Edit button', fakeAsync(() => {
    let buttonElement = fixture.debugElement.query(By.css('.edit-button'));
    
    spyOn(component, 'editPerson');
    //Trigger click event after spyOn
    buttonElement.triggerEventHandler('click', null);
    
    tick();
    expect(component.editPerson).toHaveBeenCalled();
  }));  



});



import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StudentService } from '../service/student.service';
import { StudentComponent } from './student.component';
import { HttpClient } from '@angular/common/http';
import { TestHeroService } from '../service/test-hero.service';
import { getTestHeroes } from '../service/test-heroes';


const HEROES = getTestHeroes();

let component: StudentComponent;
let fixture: ComponentFixture<StudentComponent>;
let service: StudentService;
let http: HttpClient;
let page: Page;

describe('StudentComponent', () => {


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentComponent],
      imports: [
        HttpClientTestingModule,
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        { provide: StudentService, useClass: TestHeroService },
      ]
    })
      .compileComponents()
      .then(createComponent);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = new StudentService(http);

  });

  it('check the successful message ', () => {
    expect(fixture.debugElement.query(By.css('.success-message'))).toBeNull();
    component.submitted = true;
    fixture.detectChanges();
    let message = fixture.debugElement.query(By.css('.success-message'));
    let native : HTMLElement =  message.nativeElement;
    expect(native.textContent).toBe('hello');
  });


  //css properties 

  it('should css ', () => {
    let heads = fixture.debugElement.query(By.css('.sky'));
    let native: HTMLElement = heads.nativeElement;
    expect(native.style.backgroundColor).toBe('rgb(180, 168, 192)');
  });

  ///

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
    let native: HTMLElement = users[1].nativeElement
    expect(native.innerText).toContain('user2');
  }));

  it(`using class inside loop`, async(() => {
    fixture.detectChanges();
    let users = fixture.debugElement.queryAll(By.css('.user-list'));
    let native: HTMLElement = users[1].nativeElement
    expect(native.innerText).toContain('user2');
  }));

  it(`should have Stu[1].name is 2`, async(() => {
    expect(component.users[1].name).toBe('user2');
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display heroes', () => {
    console.log("page.heroRows.length ", page.heroRows.length);
    expect(page.heroRows.length).toBeGreaterThan(0);
  });

  it('1st hero should match 1st test hero', () => {
    const expectedHero = HEROES[0];

    const actualHero = page.heroRows[0].textContent;
    console.log("expectedHero ", expectedHero);
    console.log("actualHero ", actualHero);

    expect(actualHero).toContain(expectedHero.userName.toString(), 'hero.userName');
    expect(actualHero).toContain(expectedHero.password, 'hero.password');
  });

  it('#getObservableValue should return value from observable',
    (done: DoneFn) => {
      service.getObservableData().subscribe(value => {
        expect(value).toContain('observable value');
        done();
      });
    });


  

});


function createComponent() {
  fixture = TestBed.createComponent(StudentComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
  return fixture.whenStable().then(() => {
    fixture.detectChanges();
    page = new Page();
  });
}

class Page {

  heroRows: HTMLLIElement[];

  constructor() {
    const heroRowNodes = fixture.nativeElement.querySelectorAll('li');
    this.heroRows = Array.from(heroRowNodes);
  }
}


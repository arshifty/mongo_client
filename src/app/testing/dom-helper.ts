import { ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";


export class DOMHelper<T> {

    private fixture: ComponentFixture<T>
    constructor(fixture: ComponentFixture<T>) {
      this.fixture = fixture;
    }
  
    singleText(tagName: string) {
      const tagElem = this.fixture.debugElement.query(By.css(tagName));
      if (tagElem) {
        return tagElem.nativeElement.textContent;
      }
    }
  
    countData(tagName : string ) :number {
      const elements =  this.fixture.debugElement.queryAll(By.css(tagName));
        return elements.length;    
    }
  }
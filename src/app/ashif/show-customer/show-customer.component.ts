import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CoursesStore } from '../../service/courses.store';
import { Customer } from '../../model/Customer'

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {

  customerInfo$: Observable<any[]>;

  constructor(private coursesStore: CoursesStore) {}

  ngOnInit() {
    this.reloadCourses();
  }

  reloadCourses() {
    this.customerInfo$ = this.coursesStore.getCustomerInfo();
    this.customerInfo$.subscribe(res => console.log("customerInfo ", res));
  }

}

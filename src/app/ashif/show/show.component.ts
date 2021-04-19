
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {CoursesStore} from '../../service/courses.store';
import {Order} from '../../model/Order'

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowComponent implements OnInit {

  orderData$: Observable<Order[]>;
  
  constructor(private coursesStore: CoursesStore) {  }

  ngOnInit() {   
    this.reloadCourses();
}

reloadCourses() {
    this.orderData$ =this.coursesStore.getOrderFilterData();
    this.orderData$.subscribe(res => console.log( "Order data ",  res));
 }
}

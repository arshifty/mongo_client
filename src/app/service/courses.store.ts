import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
// import { Course, sortCoursesBySeqNo } from '../model/course';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../loading/loading.service';
// import { MessagesService } from '../messages/messages.service';
import { Order } from '../model/Order';
// import {Customer} from '../model/Customer';


const baseUrl = 'http://localhost:3006/user';


@Injectable({
    providedIn: 'root'
})
export class CoursesStore {

    constructor(
        private http: HttpClient,
        private loading: LoadingService,
    ) {
        this.clientData();
        this.customerData()
    }

    private subjectData = new BehaviorSubject<Order[]>([]);
    userData$: Observable<Order[]> = this.subjectData.asObservable();

    getOrderFilterData(): Observable<Order[]> {
        return this.userData$
            .pipe(
                map(user => user)
            )
    }

    private clientData() {
        const loadClient$ = this.http.get<Order[]>(baseUrl)
            .pipe(
                map(response => response),
                catchError(err => {
                    const message = "Could not load orders";
                    console.log(message, err);
                    return throwError(err);
                }),
                tap(user => {
                    console.log("see order list :   ", user);
                    this.subjectData.next(user)

                })
            );
        this.loading.showLoaderUntilCompleted(loadClient$)
            .subscribe();

    }

    private customData = new BehaviorSubject<any[]>([]);
    customerObservableData$: Observable<any[]> = this.customData.asObservable();

    getCustomerInfo(): Observable<any[]> {
        return this.customerObservableData$
            .pipe(
                map(custom => custom)
            )
    }

    private customerData() {
        const loadClient$ = this.http.get<any[]>(`${baseUrl}/customer`)
            .pipe(
                map(response => response),
                catchError(err => {
                    const message = "Could not load orders";
                    console.log(message, err);
                    return throwError(err);
                }),
                tap(data => {
                    console.log("see customer list :   ", data);
                    this.customData.next(data)

                })
            );
        this.loading.showLoaderUntilCompleted(loadClient$)
            .subscribe();

    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-searchpagination',
  templateUrl: './searchpagination.component.html',
  styleUrls: ['./searchpagination.component.css']
})
export class SearchpaginationComponent implements OnInit {

  stuData: any = [];
  submitted: boolean;

  constructor(
    private myservice: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.display();
  }

  display() {
    this.myservice.getStuData().subscribe((data) => {
      this.stuData = data;
      this.submitted = true;
    })
  }

  userName: any;
  p : number = 1;
  search() {
    if (this.userName == "") {
      this.ngOnInit();
    } else {
      this.stuData = this.stuData.filter(res => {
        return res.userName.toLocaleLowerCase().match(this.userName.toLocaleLowerCase());
      })
    }
  }

}

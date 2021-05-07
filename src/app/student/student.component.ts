import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../service/student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  stuData: any = [];
  datas: any = [];
  users: any = [];
  constructor(
    private myservice: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.displayHardCodedData();
    this.display();
    // this.others();
  }

  // others() {
  //   this.myservice.getStuData().subscribe((data) => {
  //     this.datas = data;
  //     console.log(this.datas.length);
  //   })
  // }

  displayHardCodedData() {
    this.users = this.myservice.getUsers();
  }

  array = [];  

  display() {
    this.myservice.getStuData().subscribe((data) => {
      this.stuData = data;
    })

    

  }

}

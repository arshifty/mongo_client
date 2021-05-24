import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Stu } from '../model/stu';
import { User } from '../model/User';
import { StudentService } from '../service/student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  stuData: any = [];
  users: any = [];
  heroes: Observable<User[]>;
  submitted: boolean;

  constructor(
    private myservice: StudentService,
    private route: ActivatedRoute,
    private router: Router) {  }

  ngOnInit(): void {
    this.heroes = this.myservice.getHeroes();
    
    this.displayHardCodedData();
    this.display();
  }

  displayHardCodedData() {
    this.users = this.myservice.getUsers();
  }

  display() {
    this.myservice.getStuData().subscribe((data) => {
      this.stuData = data;
      this.submitted = true;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-router-link-test',
  templateUrl: './router-link-test.component.html',
  styleUrls: ['./router-link-test.component.css']
})
export class RouterLinkTestComponent implements OnInit {

  postDetails;
  showLoadingIndicator;

  constructor(private service : UserServiceService){
    this.postDetails = [];
  }

  ngOnInit(): void {
    this.getPostDetails();
  }

  getPostDetails(){
    this.showLoadingIndicator = true;
    this.service.getPosts().subscribe((response : []) => {
      this.showLoadingIndicator = false;
      if(response && response.length > 0) {
        this.postDetails = response;
      } else {
        this.postDetails = [];
      }
    })
  }

}

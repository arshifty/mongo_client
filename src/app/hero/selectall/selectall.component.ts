import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selectall',
  templateUrl: './selectall.component.html',
  styleUrls: ['./selectall.component.css']
})
export class SelectallComponent implements OnInit {

  isMasterSel: boolean;
  categoryList: any;
  checkedCategoryList: any;
  constructor(
    private myservice: UserServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    // this.isMasterSel = false;
    // this.categoryList = [
    //   { id: 1, value: 'PHP', isSelected: false },
    //   { id: 2, value: 'Laravel', isSelected: false },
    //   { id: 3, value: 'Angular', isSelected: true },
    //   { id: 4, value: 'React', isSelected: true },
    //   { id: 5, value: 'Vue', isSelected: true },
    //   { id: 6, value: 'JQuery', isSelected: false },
    //   { id: 7, value: 'Javascript', isSelected: false },
    // ];
    // this.getCheckedItemList();

  }

  ngOnInit(): void {
    this.viewData();
    this.selectedItems = new Array<string>();
  }

  DataList: any;
  checkItem: boolean;
  enamul: boolean;
  counter: number = 0;
  selectedItems: string[];

  submit() {
      this.myservice.updateSelect(this.selectedItems).subscribe((result: any) => {    
      if (result.success) {
       console.log("Password updated.", "Success!");
      } else {
       console.log(  "Failed!");
      }
    })

  }

  getAllCheckedUnchecked(e: any) {
    if (e.target.checked == true) {
      this.checkItem = true;
    } else {
      this.checkItem = false;
    }
  }


  findCheckedValue(event: any, id: string) {
    if (event.target.checked == true) {
      this.selectedItems.push(id);
      if (this.selectedItems.length == this.DataList.length) {
        this.enamul = true;
      }
    } else {
      this.selectedItems = this.selectedItems.filter((ma): any => ma != id);
      if (this.selectedItems.length != this.DataList.length) {
        this.enamul = false;
      }
    }
    //console.log(this.selectedItems);
  }


  viewData() {
    this.myservice.getData().subscribe(
      data => {
        this.DataList = data;
        this.DataList.forEach((element: any) => {
          if (element.bool) {
            this.counter++;
            this.selectedItems.push(element._id);
          }
        });
        if (this.counter == this.DataList.length) {
          this.enamul = true;
        }
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }







  // checkUncheckAll() {
  //   for (var i = 0; i < this.categoryList.length; i++) {
  //     this.categoryList[i].isSelected = this.isMasterSel;
  //   }
  //   this.getCheckedItemList();
  // }

  // isAllSelected() {
  //   this.isMasterSel = this.categoryList.every(function (item: any) {
  //     return item.isSelected == true;
  //   })
  //   this.getCheckedItemList();
  // }

  // getCheckedItemList() {
  //   this.checkedCategoryList = [];
  //   for (var i = 0; i < this.categoryList.length; i++) {
  //     if (this.categoryList[i].isSelected)
  //       this.checkedCategoryList.push(this.categoryList[i]);
  //   }
  //   this.checkedCategoryList = JSON.stringify(this.checkedCategoryList);
  // }


}

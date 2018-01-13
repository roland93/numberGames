import { Component, OnInit } from '@angular/core';

//import { User } from '../_models/index';
import { UserService } from '../_services/index';
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    /*
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
    */
    inputNumber: number;
    predefinedNumber: number;
    sizeofNumber: number;
    counter = 3;
    constructor(private userService: UserService) { }
    //when the try number clicked this function is called
    //itt checks if the input number is equal with the predefinednumber
    tryNumber() {
       if(this.predefinedNumber==this.inputNumber) {
        alert("success!");
        this.userService.loggingData(this.predefinedNumber,this.inputNumber);
        this.predefinedNumber = Math.floor(Math.random() * 10000);
        this.sizeofNumber = this.predefinedNumber.toString().length;
        this.counter = 3;
       } else {
        if(this.counter>0) {
        this.counter--;
        this.userService.loggingData(this.predefinedNumber,this.inputNumber);
       } else {
          location.href = "/login";
       }
      }
    }
    ngOnInit() {
      this.predefinedNumber = Math.floor(Math.random() * 10000);
      this.sizeofNumber = this.predefinedNumber.toString().length;
    }
}
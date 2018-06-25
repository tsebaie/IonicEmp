import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {EmpDetailsPage} from '../emp-details/emp-details'





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
 
  EmployeeRouteEmp(){
    this.navCtrl.push(EmpDetailsPage)
  }
}

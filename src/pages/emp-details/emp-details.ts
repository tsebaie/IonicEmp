import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { con } from '../../app/Tshepo'
import arr from '../../app/arr';
import { ResultsPage } from '../results/results';
// import{LoginPage} from '../login/login';


/**
 * Generated class for the EmpDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emp-details',
  templateUrl: 'emp-details.html',
})
export class EmpDetailsPage {


  try = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  display(name, surname, idno, role,empimage, username,
    password) {

    var temp = empimage.replace("fakepath", " ");
    var a = temp.split(" ", 2)
    var str = a[1];
    str = str.substring(1, str.length);
    var url = "../../assets/imgs/" + str;
    console.log(str);


    console.log(empimage);
    console.log(url);

    empimage = url;

    let obj = new con(name, surname, idno, role,url, username,
      password);
    arr.push(obj);

    console.log(arr);

    this.navCtrl.push(ResultsPage);


  }
   // LoginRouteEmp(){

  //   this.navCtrl.push(LoginPage)
  // }

}


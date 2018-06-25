import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { con } from '../../app/Tshepo';

import arr from '../../app/arr';


/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

  emp = arr

  delete(i) {
    this.emp.splice(i, 1);
  }

  update(i) {


    let alert = this.alertCtrl.create({
      title: 'Update',
      inputs: [
        {
          name: 'name',
          placeholder: 'name'
        },
        {
          name: 'surname',
          placeholder: 'surname'
        },
        {
          name: 'idno',
          placeholder: 'idno'
        },
        {
          name: 'role',
          placeholder: 'role'
        },
        {
          name: 'username',
          placeholder: 'username'
        },
        {
          name: 'password',
          placeholder: 'password'
        },
        {
          name: 'empimage',
          placeholder: 'empimage',
          type: 'file' 
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          role: 'Update',
          handler: data => {
            var temp = data.empimage.replace("fakepath", " ");
            var a = temp.split(" ", 2)
            var str = a[1];
            str = str.substring(1, str.length);
            var url = "../../assets/imgs/" + str;
            var objEmp = new con(data.name, data.surname, data.idno, data.role,url,data.username,data.password);
            this.emp.splice(i, 1, objEmp);
          }
        }
      ]
    });
    alert.present();


  }

}

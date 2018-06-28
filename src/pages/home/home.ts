import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AdminLoginPage} from "../admin-login/admin-login"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  adminName:string;
  password:string;

  constructor(public navCtrl: NavController) {

  }

  login(){
    this.navCtrl.push(AdminLoginPage);
  }

}

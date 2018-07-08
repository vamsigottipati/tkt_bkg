import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AdminLoginPage} from "../admin-login/admin-login";
import { User } from "../../models/user";

import { AngularFireAuth } from "angularfire2/auth"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as User;

  adminName:string;
  password:string;

  constructor(
    private afauth: AngularFireAuth,
    public navCtrl: NavController) {

  }

  login(user: User){
    this.afauth.auth.signInWithEmailAndPassword(user.email, user.password).then(
      data => {
        this.navCtrl.push(AdminLoginPage);
      }
    )
    .catch(error => {
      alert(error)
    })

  }

}

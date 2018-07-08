import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddmoviesPage} from "../addmovies/addmovies";

/**
 * Generated class for the AdminLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-login',
  templateUrl: 'admin-login.html',
})
export class AdminLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  addMoviesRoute() {
    this.navCtrl.push(AddmoviesPage)
  }
}

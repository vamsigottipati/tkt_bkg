import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { User } from "../../models/user";
import { homepage } from "../home/home"



/**
 * Generated class for the AddmoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addmovies',
  templateUrl: 'addmovies.html',
})
export class AddmoviesPage {

  user = {} as User;

  constructor(
    public AngularFireDatabase: AngularFireDatabaseModule,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  databasePush(user: User) {
    var databaseRef = AngularFireDatabase.list('movies/' + user.movieDate);
    this.databaseRef.push({movieName : user.movieName});
    this.databaseRef.push({movieDate : user.movieDate});
  }

}

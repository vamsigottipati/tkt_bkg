import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddmoviesPage } from './addmovies';

@NgModule({
  declarations: [
    AddmoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddmoviesPage),
  ],
})
export class AddmoviesPageModule {}

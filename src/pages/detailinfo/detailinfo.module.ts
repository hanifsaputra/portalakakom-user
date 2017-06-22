import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailinfoPage } from './detailinfo';

@NgModule({
  declarations: [
    DetailinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailinfoPage),
  ],
  exports: [
    DetailinfoPage
  ]
})
export class DetailinfoPageModule {}

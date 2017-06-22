import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the DetailBeritaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail-berita',
  templateUrl: 'detail-berita.html',
})
export class DetailBeritaPage {
   judul;
   content;
   images;
   tgl_dibuat;
 //public items : any = [];
   constructor(public navParams: NavParams)
   {

   }

   ionViewDidLoad(){
      this.judul = this.navParams.get("record").judul;
      this.content = this.navParams.get("record").content;
      this.images = this.navParams.get("record").images;
      this.tgl_dibuat = this.navParams.get("record").tgl_dibuat;
   }
}

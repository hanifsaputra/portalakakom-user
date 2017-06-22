import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class Info {

   public items : any = [];
   constructor(public navCtrl: NavController,
               public http   : Http)
   {

   }

   ionViewWillEnter()
   {
      this.load();
   }

   // Retrieve the JSON encoded data from the remote server
   // Using Angular's Http class and an Observable - then
   // assign this to the items array for rendering to the HTML template
   load()
   {
      this.http.get('http://localhost/portal_akakom/tampil_info.php')
      .map(res => res.json())
      .subscribe(data =>
      {
         this.items = data;
      });
    
   }

   view(param)
   {
      this.navCtrl.push('DetailinfoPage', param);
   }

}

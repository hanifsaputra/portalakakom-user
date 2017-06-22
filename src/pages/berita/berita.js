var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the Berita page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Berita = (function () {
    function Berita(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.items = [];
    }
    Berita.prototype.ionViewWillEnter = function () {
        this.load();
    };
    // Retrieve the JSON encoded data from the remote server
    // Using Angular's Http class and an Observable - then
    // assign this to the items array for rendering to the HTML template
    Berita.prototype.load = function () {
        var _this = this;
        this.http.get('http://akakom.96.lt/portal-akakom/tampil-berita-kampus.php')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.items = data;
        });
        var str = ' {{ item.content }}';
        console.log('(0, 50): ' + str.substr(0, 50));
    };
    // Allow navigation to the AddTechnology page for creating a new entry
    Berita.prototype.addEntry = function () {
        this.navCtrl.push('AddTechnology');
    };
    // Allow navigation to the AddTechnology page for amending an existing entry
    // (We supply the actual record to be amended, as this method's parameter,
    // to the AddTechnology page
    Berita.prototype.viewEntry = function (param) {
        this.navCtrl.push('AddTechnology', param);
    };
    return Berita;
}());
Berita = __decorate([
    IonicPage(),
    Component({
        selector: 'page-berita',
        templateUrl: 'berita.html',
    }),
    __metadata("design:paramtypes", [NavController,
        Http])
], Berita);
export { Berita };
//# sourceMappingURL=berita.js.map
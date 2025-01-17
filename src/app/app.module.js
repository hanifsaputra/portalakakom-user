var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Sejarah } from '../pages/sejarah/sejarah';
import { Visimisi } from '../pages/visimisi/visimisi';
import { Berita } from '../pages/berita/berita';
import { Jurusan } from '../pages/jurusan/jurusan';
import { Info } from '../pages/info/info';
import { Tautan } from '../pages/tautan/tautan';
import { Login } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            HomePage,
            Sejarah,
            Visimisi,
            Jurusan,
            Berita,
            Info,
            Tautan,
            Login
        ],
        imports: [
            BrowserModule,
            HttpModule,
            IonicModule.forRoot(MyApp),
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            HomePage,
            Sejarah,
            Visimisi,
            Jurusan,
            Berita,
            Info,
            Tautan,
            Login
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler }
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
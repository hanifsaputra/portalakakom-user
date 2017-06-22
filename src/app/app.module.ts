import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Sejarah } from '../pages/sejarah/sejarah';
import { Visimisi } from '../pages/visimisi/visimisi';
import { Berita } from '../pages/berita/berita';
import { DetailBeritaPage } from '../pages/detail-berita/detail-berita';
import { Jurusan } from '../pages/jurusan/jurusan';
import { Info } from '../pages/info/info';
import { Tautan } from '../pages/tautan/tautan';
import { Login } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({

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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

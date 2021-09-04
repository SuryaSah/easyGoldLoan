import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Camera } from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { ToastService } from './service/toast.service';
import { AlertService } from './service/alert.service';

var firebaseConfig = {
  apiKey: "AIzaSyBR_7wEG-kRyC0T3oMZDaGblV6jeH3hxuI",
  authDomain: "easygoldloan.firebaseapp.com",
  databaseURL: "https://easygoldloan.firebaseio.com",
  projectId: "easygoldloan",
  storageBucket: "easygoldloan.appspot.com",
  messagingSenderId: "922445648695",
  appId: "1:922445648695:web:3d2781b1197b68a8a8c0b2",
  measurementId: "G-MHWTC36DEL"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(), 
    AppRoutingModule, 
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    ToastService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

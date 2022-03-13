import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAJvnwQWpmb0btK9IKRhT-WtwVtU9D2enc",
      authDomain: "ionic-mobile-app-cc47d.firebaseapp.com",
      projectId: "ionic-mobile-app-cc47d",
      storageBucket: "ionic-mobile-app-cc47d.appspot.com",
      messagingSenderId: "107630051230",
      appId: "1:107630051230:web:114f85e6789bc438b2208f"
    }),
    AngularFirestoreModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

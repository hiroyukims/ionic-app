import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePage } from '../pages/home/home';
import { ApiRequestProvider } from '../providers/api-request/api-request';
import { HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';

import { Dialogs } from '@ionic-native/dialogs';

//Import pages

import { RegisterUserPage } from '../pages/register-user/register-user';
import { RegisterCompanyPage } from '../pages/register-company/register-company';
import { RegisterDocPage } from '../pages/register-doc/register-doc';
import { ApiCepProvider } from '../providers/api-cep/api-cep';
import { ToastController } from 'ionic-angular';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterUserPage,
    RegisterCompanyPage,
    RegisterDocPage,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterUserPage,
    RegisterCompanyPage,
    RegisterDocPage,



  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiRequestProvider,
    Camera,
    Dialogs,
    ApiCepProvider,
    ToastController
  ]
})
export class AppModule { }

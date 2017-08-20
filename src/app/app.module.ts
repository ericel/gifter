import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';

import { MyApp } from './app.component';

import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';

import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SupportPage } from '../pages/support/support';

import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserData } from '../providers/user-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    TabsPage,
    LoginPage,
    SignupPage,
    SupportPage,
    AccountPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {}, {
     links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: ListPage, name: 'List'},
     ]
      }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    TabsPage,
    LoginPage,
    SignupPage,
    SupportPage,
    AccountPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserData,
    InAppBrowser
  ]
})
export class AppModule {}

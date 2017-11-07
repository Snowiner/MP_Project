import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { MyPagePage } from '../pages/my-page/my-page';
import { ParkingLotViewPage } from '../pages/parking-lot-view/parking-lot-view';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { StatisticsPage } from '../pages/statistics/statistics';
import { AuthorizingPagePage } from '../pages/authorizing-page/authorizing-page';
import { AddUserPage } from '../pages/add-user/add-user';
import { NewParkingLotPage } from '../pages/new-parking-lot/new-parking-lot';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    MyPagePage,
    ParkingLotViewPage,
    TabsControllerPage,
    LoginPage,
    StatisticsPage,
    AuthorizingPagePage,
    AddUserPage,
    NewParkingLotPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    MyPagePage,
    ParkingLotViewPage,
    TabsControllerPage,
    LoginPage,
    StatisticsPage,
    AuthorizingPagePage,
    AddUserPage,
    NewParkingLotPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
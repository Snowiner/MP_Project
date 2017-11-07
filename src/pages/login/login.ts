import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyPagePage } from '../my-page/my-page';
import { ParkingLotViewPage } from '../parking-lot-view/parking-lot-view';
import { StatisticsPage } from '../statistics/statistics';
import { AuthorizingPagePage } from '../authorizing-page/authorizing-page';
import { AddUserPage } from '../add-user/add-user';
import { NewParkingLotPage } from '../new-parking-lot/new-parking-lot';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToMyPage(params){
    if (!params) params = {};
    this.navCtrl.push(MyPagePage);
  }goToParkingLotView(params){
    if (!params) params = {};
    this.navCtrl.push(ParkingLotViewPage);
  }goToStatistics(params){
    if (!params) params = {};
    this.navCtrl.push(StatisticsPage);
  }goToAuthorizingPage(params){
    if (!params) params = {};
    this.navCtrl.push(AuthorizingPagePage);
  }goToAddUser(params){
    if (!params) params = {};
    this.navCtrl.push(AddUserPage);
  }goToNewParkingLot(params){
    if (!params) params = {};
    this.navCtrl.push(NewParkingLotPage);
  }
}

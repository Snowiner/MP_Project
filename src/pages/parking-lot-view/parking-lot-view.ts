import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatisticsPage } from '../statistics/statistics';
import { AuthorizingPagePage } from '../authorizing-page/authorizing-page';
import { AddUserPage } from '../add-user/add-user';

@Component({
  selector: 'page-parking-lot-view',
  templateUrl: 'parking-lot-view.html'
})
export class ParkingLotViewPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToStatistics(params){
    if (!params) params = {};
    this.navCtrl.push(StatisticsPage);
  }goToAuthorizingPage(params){
    if (!params) params = {};
    this.navCtrl.push(AuthorizingPagePage);
  }goToAddUser(params){
    if (!params) params = {};
    this.navCtrl.push(AddUserPage);
  }
}

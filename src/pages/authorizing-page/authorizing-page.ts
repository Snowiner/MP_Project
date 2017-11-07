import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddUserPage } from '../add-user/add-user';
import { AuthorizingPagePage } from '../authorizing-page/authorizing-page';

@Component({
  selector: 'page-authorizing-page',
  templateUrl: 'authorizing-page.html'
})
export class AuthorizingPagePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToAddUser(params){
    if (!params) params = {};
    this.navCtrl.push(AddUserPage);
  }goToAuthorizingPage(params){
    if (!params) params = {};
    this.navCtrl.push(AuthorizingPagePage);
  }
}

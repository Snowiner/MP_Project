import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthorizingPagePage } from '../authorizing-page/authorizing-page';
import { AddUserPage } from '../add-user/add-user';

@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html'
})
export class AddUserPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToAuthorizingPage(params){
    if (!params) params = {};
    this.navCtrl.push(AuthorizingPagePage);
  }goToAddUser(params){
    if (!params) params = {};
    this.navCtrl.push(AddUserPage);
  }
}

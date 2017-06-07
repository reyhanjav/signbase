import { Component } from '@angular/core';
import { SupportPage } from '../support/support';
import { AlertController, NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserDataProvider } from '../../providers/userdata/user-data';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  username;
  name: string;
  email: string;
  constructor(public alertCtrl: AlertController, public nav: NavController, public userData: UserDataProvider) {

  }

  ngAfterViewInit() {
      this.getUsername();
      this.getName();
      this.getEmail();

    }


    // Present an alert with the current username populated
    // clicking OK will update the username and display it
    // clicking Cancel will close the alert and do nothing


    getUsername() {
      this.userData.getUsername().then((username) => {
        this.username = username;
      });
    }

    getName() {
      this.userData.getName().then((username) => {
        this.name = username;
      });
    }
    getEmail() {
      this.userData.getEmail().then((username) => {
        this.email = username;
      });
    }
    logout() {
      this.userData.logout();
      this.nav.setRoot(LoginPage);
    }
    update() {
      this.nav.setRoot(LoginPage);
    }
    feedback() {
      this.nav.setRoot(SupportPage);
    }
  //  updateProfile() {
  //    this.nav.setRoot(UpdateProfilePage);
  //  }
  }

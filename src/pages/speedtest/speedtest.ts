import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';

/**
 * Generated class for the SpeedtestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-speedtest',
  templateUrl: 'speedtest.html',
})
export class SpeedtestPage {

  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {
  }

 openUrl() {

        this.platform.ready().then(() => {
           const browser = this.iab.create('http://signbase.speedtestcustom.com',"_blank", "location=yes");
           browser.close();

        });
  }  

}

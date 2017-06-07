import { Component, ViewChild } from '@angular/core';

import { MenuController, NavController, Slides } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})

export class IntroPage {
  showSkip = true;

	@ViewChild('slides') slides: Slides;

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public storage: Storage
  ) { }

  startApp() {
    this.navCtrl.push(LoginPage).then(() => {
      this.storage.set('hasSeenIntro', 'true');
    })
  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

	ionViewWillEnter() {
		this.slides.update();
	}

  ionViewDidEnter() {
    // the root left menu should be disabled on the Intro page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the Intro page
    this.menu.enable(true);
  }

}

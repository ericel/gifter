import { Component, ViewChild } from '@angular/core';
import { MenuController, IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
showSkip = true;
@ViewChild('slides') slides: Slides;
  constructor( 
    public navParams: NavParams,
    public navCtrl: NavController,
    public menu: MenuController,
    public storage: Storage
  ) {
  }

 startApp() {
    this.navCtrl.push(TabsPage).then(() => {
      this.storage.set('hasSeenTutorial', 'true');
    })
  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

	ionViewWillEnter() {
		this.slides.update();
	}

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}

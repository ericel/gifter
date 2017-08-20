import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ListPage } from '../list/list';
import { NavParams } from 'ionic-angular';
/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
// this tells the tabs component which Pages
  // should be each tab's root Page
  mySelectedIndex: number;
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ListPage;
  constructor(public navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }


}

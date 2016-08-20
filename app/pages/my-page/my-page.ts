import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the MyPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/my-page/my-page.html',
})
export class MyPagePage {

  title;

  constructor(private nav: NavController, private navParams: NavParams) {

    this.title = this.navParams.get('title');
    // console.log('Passed title = ', this.title);
  }

  onGetTitle() {
    console.log('Passed title = ', this.title);
  }

}

import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyPagePage } from './../my-page/my-page';



@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
})

export class HelloIonicPage {

  constructor(public nav: NavController) {
    this.nav = nav;
  }
  onMyPage() {
    this.nav.push(MyPagePage, {
      title: 'John'
    });
  }
}
 
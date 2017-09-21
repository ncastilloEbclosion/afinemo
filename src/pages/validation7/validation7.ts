import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Confirmation4Page } from '../../pages/confirmation4/confirmation4';


@Component({
  selector: 'page-validation7',
  templateUrl: 'validation7.html'
})
export class Validation7Page {

	confirmation4 = Confirmation4Page;

  constructor(public navCtrl: NavController) {
  }
  
}

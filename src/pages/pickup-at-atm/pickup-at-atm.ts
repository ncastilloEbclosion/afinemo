import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validation6Page } from '../../pages/validation6/validation6';


@Component({
  selector: 'page-pickup-at-atm',
  templateUrl: 'pickup-at-atm.html'
})
export class PickupAtAtmPage {

	validation6 = Validation6Page;

  constructor(public navCtrl: NavController) {
  }
  
}

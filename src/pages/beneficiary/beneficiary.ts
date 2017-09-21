import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validation7Page } from '../../pages/validation7/validation7';


@Component({
  selector: 'page-beneficiary',
  templateUrl: 'beneficiary.html'
})
export class BeneficiaryPage {

	validation7 = Validation7Page;

  constructor(public navCtrl: NavController) {
  }
  
}

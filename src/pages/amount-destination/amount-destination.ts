import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BeneficiaryPage } from '../../pages/beneficiary/beneficiary';


@Component({
  selector: 'page-amount-destination',
  templateUrl: 'amount-destination.html'
})
export class AmountDestinationPage {

	beneficiary = BeneficiaryPage;

  constructor(public navCtrl: NavController) {
  }
  
}

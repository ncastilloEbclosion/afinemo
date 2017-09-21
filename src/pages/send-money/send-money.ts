import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AmountDestinationPage } from '../../pages/amount-destination/amount-destination';


@Component({
  selector: 'page-send-money',
  templateUrl: 'send-money.html'
})
export class SendMoneyPage {
	amountDestination = AmountDestinationPage;

  constructor(public navCtrl: NavController) {
  }
  
}

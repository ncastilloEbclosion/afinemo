import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PickupAtAgentLocationPage } from '../../pages/pickup-at-agent-location/pickup-at-agent-location';
import { PickupAtAtmPage } from '../../pages/pickup-at-atm/pickup-at-atm';
import { SendMoneyPage } from '../../pages/send-money/send-money';



@Component({
  selector: 'page-validation4',
  templateUrl: 'validation4.html'
})
export class Validation4Page {

	pickupAl = PickupAtAgentLocationPage;
	pickupAtm = PickupAtAtmPage;
	sendMoney = SendMoneyPage;

  constructor(public navCtrl: NavController) {
  }
  
}

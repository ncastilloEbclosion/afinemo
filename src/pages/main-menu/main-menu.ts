import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CashACheckPage } from '../../pages/cash-acheck/cash-acheck';
import { SendMoneyPage } from '../../pages/send-money/send-money';



@Component({
  selector: 'page-main-menu',
  templateUrl: 'main-menu.html'
})
export class MainMenuPage {
	
	cashCheck = CashACheckPage;
	sendMoney = SendMoneyPage;

  constructor(public navCtrl: NavController) {
  }
  
}

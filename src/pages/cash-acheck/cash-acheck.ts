import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScanCheckPage } from '../../pages/scan-check/scan-check';


@Component({
  selector: 'page-cash-acheck',
  templateUrl: 'cash-acheck.html'
})
export class CashACheckPage {

	scanCheck = ScanCheckPage;

  constructor(public navCtrl: NavController) {
  }
  
}

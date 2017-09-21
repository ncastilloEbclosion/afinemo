import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validation2Page } from '../../pages/validation2/validation2';


@Component({
  selector: 'page-scan-check',
  templateUrl: 'scan-check.html'
})
export class ScanCheckPage {

	validation2 = Validation2Page;

  constructor(public navCtrl: NavController) {
  }
  
}

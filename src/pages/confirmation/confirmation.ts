import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validation3Page } from '../../pages/validation3/validation3';


@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html'
})
export class ConfirmationPage {

	validation3 = Validation3Page;

  constructor(public navCtrl: NavController) {
  }
  
}

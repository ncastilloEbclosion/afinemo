import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfirmationPage } from '../../pages/confirmation/confirmation';


@Component({
  selector: 'page-validation2',
  templateUrl: 'validation2.html'
})
export class Validation2Page {

	confirmation = ConfirmationPage;

  constructor(public navCtrl: NavController) {
  }
  
}

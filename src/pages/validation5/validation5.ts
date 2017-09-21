import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Confirmation2Page } from '../../pages/confirmation2/confirmation2';


@Component({
  selector: 'page-validation5',
  templateUrl: 'validation5.html'
})
export class Validation5Page {

	confirmation2 = Confirmation2Page;

  constructor(public navCtrl: NavController) {
  }
  
}

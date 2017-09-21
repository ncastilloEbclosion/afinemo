import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Confirmation3Page } from '../../pages/confirmation3/confirmation3';


@Component({
  selector: 'page-validation6',
  templateUrl: 'validation6.html'
})
export class Validation6Page {

	confirmation3 = Confirmation3Page;

  constructor(public navCtrl: NavController) {
  }
  
}

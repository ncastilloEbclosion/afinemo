import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validation4Page } from '../../pages/validation4/validation4';


@Component({
  selector: 'page-validation3',
  templateUrl: 'validation3.html'
})
export class Validation3Page {

	validation4 = Validation4Page;

  constructor(public navCtrl: NavController) {
  }
  
}

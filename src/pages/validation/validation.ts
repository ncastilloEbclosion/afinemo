import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../../pages/welcome/welcome';


@Component({
  selector: 'page-validation',
  templateUrl: 'validation.html'
})
export class ValidationPage {

	welcomePage = WelcomePage;

  constructor(public navCtrl: NavController) {
  }
  
}

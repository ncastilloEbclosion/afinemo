import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validation5Page } from '../../pages/validation5/validation5';


@Component({
  selector: 'page-pickup-at-agent-location',
  templateUrl: 'pickup-at-agent-location.html'
})
export class PickupAtAgentLocationPage {

	validation5 = Validation5Page;

  constructor(public navCtrl: NavController) {
  }
  
}

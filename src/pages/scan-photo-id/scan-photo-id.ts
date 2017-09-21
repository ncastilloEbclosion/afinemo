import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ValidationPage } from '../../pages/validation/validation';

@Component({
  selector: 'page-scan-photo-id',
  templateUrl: 'scan-photo-id.html'
})
export class ScanPhotoIdPage {
	
	validationPage = ValidationPage;

  constructor(public navCtrl: NavController) {
  }
  
}

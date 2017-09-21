import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScanPhotoIdPage } from '../../pages/scan-photo-id/scan-photo-id';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {
	
	scanPhoto = ScanPhotoIdPage;

  constructor(public navCtrl: NavController) {
  }
  
}

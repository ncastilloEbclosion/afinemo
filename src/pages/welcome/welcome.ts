import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainMenuPage } from '../../pages/main-menu/main-menu';
import { SignUpPage } from '../../pages/sign-up/sign-up';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  mainMenu = MainMenuPage;
  signUp   = SignUpPage;
  image: string = null;

  constructor(
  	public navCtrl: NavController,
  	private camera: Camera
  ) {
  }

  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
      console.error( error );
    });
  }
  
}

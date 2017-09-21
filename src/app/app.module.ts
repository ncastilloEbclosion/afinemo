import { Camera } from '@ionic-native/camera';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ScanPhotoIdPage } from '../pages/scan-photo-id/scan-photo-id';
import { ValidationPage } from '../pages/validation/validation';
import { MainMenuPage } from '../pages/main-menu/main-menu';
import { CashACheckPage } from '../pages/cash-acheck/cash-acheck';
import { ScanCheckPage } from '../pages/scan-check/scan-check';
import { Validation2Page } from '../pages/validation2/validation2';
import { ConfirmationPage } from '../pages/confirmation/confirmation';
import { Validation3Page } from '../pages/validation3/validation3';
import { Validation4Page } from '../pages/validation4/validation4';
import { PickupAtAgentLocationPage } from '../pages/pickup-at-agent-location/pickup-at-agent-location';
import { PickupAtAtmPage } from '../pages/pickup-at-atm/pickup-at-atm';
import { Validation5Page } from '../pages/validation5/validation5';
import { Validation6Page } from '../pages/validation6/validation6';
import { Confirmation2Page } from '../pages/confirmation2/confirmation2';
import { Confirmation3Page } from '../pages/confirmation3/confirmation3';
import { SendMoneyPage } from '../pages/send-money/send-money';
import { AmountDestinationPage } from '../pages/amount-destination/amount-destination';
import { BeneficiaryPage } from '../pages/beneficiary/beneficiary';
import { Validation7Page } from '../pages/validation7/validation7';
import { Confirmation4Page } from '../pages/confirmation4/confirmation4';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    SignUpPage,
    ScanPhotoIdPage,
    ValidationPage,
    MainMenuPage,
    CashACheckPage,
    ScanCheckPage,
    Validation2Page,
    ConfirmationPage,
    Validation3Page,
    Validation4Page,
    PickupAtAgentLocationPage,
    PickupAtAtmPage,
    Validation5Page,
    Validation6Page,
    Confirmation2Page,
    Confirmation3Page,
    SendMoneyPage,
    AmountDestinationPage,
    BeneficiaryPage,
    Validation7Page,
    Confirmation4Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    SignUpPage,
    ScanPhotoIdPage,
    ValidationPage,
    MainMenuPage,
    CashACheckPage,
    ScanCheckPage,
    Validation2Page,
    ConfirmationPage,
    Validation3Page,
    Validation4Page,
    PickupAtAgentLocationPage,
    PickupAtAtmPage,
    Validation5Page,
    Validation6Page,
    Confirmation2Page,
    Confirmation3Page,
    SendMoneyPage,
    AmountDestinationPage,
    BeneficiaryPage,
    Validation7Page,
    Confirmation4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

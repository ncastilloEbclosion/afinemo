webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cash_acheck_cash_acheck__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_send_money_send_money__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainMenuPage = (function () {
    function MainMenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cashCheck = __WEBPACK_IMPORTED_MODULE_2__pages_cash_acheck_cash_acheck__["a" /* CashACheckPage */];
        this.sendMoney = __WEBPACK_IMPORTED_MODULE_3__pages_send_money_send_money__["a" /* SendMoneyPage */];
    }
    return MainMenuPage;
}());
MainMenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main-menu',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/main-menu/main-menu.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      Main Menu\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n \n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button style="height: 65px" id="mainMenu-button11" ion-button color="positive" block [navPush]="cashCheck">\n          Cash <br> a Check\n        </button>\n      </ion-col>\n      <ion-col>\n        <button style="height: 65px" id="mainMenu-button12" ion-button color="positive" block [navPush]="sendMoney">\n          Send <br> Money\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button style="height: 65px" id="mainMenu-button13" ion-button color="positive" block>\n          Make a <br> Payment\n        </button>\n      </ion-col>\n      <ion-col>\n        <button style="height: 65px" id="mainMenu-button14" ion-button color="positive" block>\n          Balance <br> Inquiry\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button style="height: 65px" id="mainMenu-button15" ion-button color="positive" block>\n          Agent/Atm <br> Locator\n        </button>\n      </ion-col>\n      <ion-col>\n        <button style="height: 65px" id="mainMenu-button16" ion-button color="positive" block>\n          Retrieve <br> Pick-Up\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <ion-grid>\n    <ion-row align-items-center>\n      <ion-col>\n        <button style="height: 65px" id="mainMenu-button17" ion-button color="positive" block>\n          Link Bank <br> Account \n        </button>\n      </ion-col>\n      <ion-icon name="code-working"></ion-icon>\n      <ion-col>\n        <button style="height: 65px" id="mainMenu-button18" ion-button color="positive" block>\n          Cash-In\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button style="height: 65px" id="mainMenu-button19" ion-button color="positive" block>\n          Settings\n        </button>\n      </ion-col>\n       \n      <ion-col>\n        <button style="height: 65px" id="mainMenu-button20" ion-button color="positive" block>\n          My Account\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button style="height: 65px" id="mainMenu-button21" ion-button color="positive" block>\n          Sign-Out\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/main-menu/main-menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], MainMenuPage);

//# sourceMappingURL=main-menu.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CashACheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_scan_check_scan_check__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CashACheckPage = (function () {
    function CashACheckPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.scanCheck = __WEBPACK_IMPORTED_MODULE_2__pages_scan_check_scan_check__["a" /* ScanCheckPage */];
    }
    return CashACheckPage;
}());
CashACheckPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cash-acheck',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/cash-acheck/cash-acheck.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Cash a Check\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6">\n  <div id="cashACheck-markdown2" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Your Check will be submitted for guaranteeing. Please read carefully\n      <br>\n      <strong>\n        <a href="#"> Full Terms &amp; Conditions.</a>\n      </strong>\n    </p>\n    <p style="color:#000000;">\n      If your Check is accepted you&#39;ll have 3 immediate options to access you money:\n    </p>\n  </div>\n  <div id="cashACheck-markdown3" class="show-list-numbers-and-dots">\n    <ol>\n      <li>\n        Pickup from a participant Agent Location on the network.\n      </li>\n      <li>\n        Pickup from a participant ATM on the network.\n      </li>\n      <li>\n        Send Money or Make a Payment\n      </li>\n    </ol>\n  </div>\n  <div class="spacer" style="height:15px;" id="cashACheck-spacer6"></div>\n  <div id="cashACheck-markdown4" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      *You can split your Money in multiple transactions\n    </p>\n  </div>\n  <form>\n    <ion-item>\n      <ion-label style="font-size: 14px">Check the box if you don&#39;t want to see <br> this screen in future transactions</ion-label>\n      <ion-checkbox color="" checked="false"></ion-checkbox>\n    </ion-item>\n    <button id="cashACheck-button23" ion-button color="positive" block [navPush]="scanCheck">I Accept T&C\'s</button>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/cash-acheck/cash-acheck.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], CashACheckPage);

//# sourceMappingURL=cash-acheck.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanCheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_validation2_validation2__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScanCheckPage = (function () {
    function ScanCheckPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.validation2 = __WEBPACK_IMPORTED_MODULE_2__pages_validation2_validation2__["a" /* Validation2Page */];
    }
    return ScanCheckPage;
}());
ScanCheckPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-scan-check',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/scan-check/scan-check.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      Scan Check\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  <div id="scanCheck-markdown7" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Please proceed to scan your check from both sides. Don&#39;t forget to endorse and sign your check on the back. No personal checks accepted or issued older than 5 days ago.\n    </p>\n  </div>\n  <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button style="height: 65px" id="scanPhotoId-button6" ion-button color="positive" block>\n            <nav>\n              <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n              <br><label>Front</label>\n            </nav>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button style="height: 65px" id="scanPhotoId-button7" ion-button color="positive" block>\n            <div>\n              <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n              <br><label>Back</label>\n            </div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  <div class="spacer" style="height:18px;" id="scanCheck-spacer8"></div>\n  <div id="scanCheck-markdown8" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      By pressing &quot;Submit&quot; iI agree that my check will be processed for guaranteeing and clearing. If approved. A $3.00 fee apply.\n    </p>\n  </div>\n  <div class="spacer" style="height:15px;" id="scanCheck-spacer9"></div>\n  <button id="scanCheck-button10" ion-button color="positive" block [navPush]="validation2">\n    Submit\n  </button>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/scan-check/scan-check.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ScanCheckPage);

//# sourceMappingURL=scan-check.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validation2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_confirmation_confirmation__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Validation2Page = (function () {
    function Validation2Page(navCtrl) {
        this.navCtrl = navCtrl;
        this.confirmation = __WEBPACK_IMPORTED_MODULE_2__pages_confirmation_confirmation__["a" /* ConfirmationPage */];
    }
    return Validation2Page;
}());
Validation2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-validation2',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/validation2/validation2.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Validation\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9">\n  <div id="validation2-markdown9" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Thank you! The scan of your Check was received. it could take up to 5 mins. for processing and validation. You won&#39;t see the next step until this process is completed.\n    </p>\n  </div>\n  <div class="spacer" style="height:10px;" id="validation2-spacer10"></div>\n  <button id="validation2-button22" ion-button color="positive" block [navPush]="confirmation">\n    Check Status\n  </button>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/validation2/validation2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], Validation2Page);

//# sourceMappingURL=validation2.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_validation3_validation3__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmationPage = (function () {
    function ConfirmationPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.validation3 = __WEBPACK_IMPORTED_MODULE_2__pages_validation3_validation3__["a" /* Validation3Page */];
    }
    return ConfirmationPage;
}());
ConfirmationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-confirmation',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/confirmation/confirmation.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      Confirmation\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page10">\n  <div id="confirmation-markdown10" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Congratiulations! Your check has been accepted. Pleased proceed to write the word &quot;VOID&quot;, with a pen, across in the front of your check and scan it again.\n    </p>\n  </div>\n  <div class="spacer" style="height:20px;" id="confirmation-spacer11"></div>\n  <div>\n    <img src="assets/img/h6XxxTGTQz238mKbxFFY_cheque.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  </div>\n  <div class="spacer" style="height:20px;" id="confirmation-spacer12"></div>\n  <button id="confirmation-button27" ion-button color="positive" block [navPush]="validation3">\n    Submit\n  </button>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/confirmation/confirmation.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ConfirmationPage);

//# sourceMappingURL=confirmation.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validation3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_validation4_validation4__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Validation3Page = (function () {
    function Validation3Page(navCtrl) {
        this.navCtrl = navCtrl;
        this.validation4 = __WEBPACK_IMPORTED_MODULE_2__pages_validation4_validation4__["a" /* Validation4Page */];
    }
    return Validation3Page;
}());
Validation3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-validation3',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/validation3/validation3.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Validation\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page11">\n  <div id="validation3-markdown13" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Thank you! the scan of your Check was received. It cloud take up to 1 min. for processing and validation. You won&#39;t see the next step until this process is completed.\n    </p>\n  </div>\n  <div class="spacer" style="height:10px;" id="validation3-spacer13"></div>\n  <button id="validation3-button28" ion-button color="positive" block [navPush]="validation4">\n    Check Status\n  </button>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/validation3/validation3.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], Validation3Page);

//# sourceMappingURL=validation3.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validation4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pickup_at_agent_location_pickup_at_agent_location__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_pickup_at_atm_pickup_at_atm__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_send_money_send_money__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Validation4Page = (function () {
    function Validation4Page(navCtrl) {
        this.navCtrl = navCtrl;
        this.pickupAl = __WEBPACK_IMPORTED_MODULE_2__pages_pickup_at_agent_location_pickup_at_agent_location__["a" /* PickupAtAgentLocationPage */];
        this.pickupAtm = __WEBPACK_IMPORTED_MODULE_3__pages_pickup_at_atm_pickup_at_atm__["a" /* PickupAtAtmPage */];
        this.sendMoney = __WEBPACK_IMPORTED_MODULE_4__pages_send_money_send_money__["a" /* SendMoneyPage */];
    }
    return Validation4Page;
}());
Validation4Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-validation4',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/validation4/validation4.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Validation\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page12">\n  <div id="validation4-markdown14" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Congratulation! you have completed the process. Now you just need to select how you want to access your founds:\n    </p>\n  </div>\n  <div class="spacer" style="height:10px;" id="validation4-spacer14"></div>\n  <div>\n    <img src="assets/img/nJfb4n9MRbCiyc950MCF_disponible.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  </div>\n  <div class="spacer" style="height:10px;" id="validation4-spacer16"></div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button style="height: 65px" id="validation4-button29" ion-button color="positive" block [navPush]="pickupAl">\n          Pickup at <br> Agent <br> Location\n        </button>\n      </ion-col>\n      <ion-col>\n        <button style="height: 65px" id="validation4-button30" ion-button color="positive" block [navPush]="pickupAtm">\n          Pickup at <br> Atm on <br> Network\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button style="height: 65px" id="validation4-button31" ion-button color="positive" block [navPush]="sendMoney">\n          Send <br> Money\n        </button>\n      </ion-col>\n\n      <ion-col>\n        <button style="height: 65px" id="validation4-button32" ion-button color="positive" block>\n          Make a <br> Payment\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/validation4/validation4.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], Validation4Page);

//# sourceMappingURL=validation4.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickupAtAgentLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_validation5_validation5__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PickupAtAgentLocationPage = (function () {
    function PickupAtAgentLocationPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.validation5 = __WEBPACK_IMPORTED_MODULE_2__pages_validation5_validation5__["a" /* Validation5Page */];
    }
    return PickupAtAgentLocationPage;
}());
PickupAtAgentLocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pickup-at-agent-location',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/pickup-at-agent-location/pickup-at-agent-location.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Pickup at Agent Location\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n  <div class="spacer" style="height:10px;" id="pickupAtAgentLocation-spacer17"></div>\n  <div id="pickupAtAgentLocation-markdown15" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      You have selected to pickup your funds from a participant Agent Location on the Network. Please read carefully\n      <br>\n      <strong> <a href="#"> Full Terms &amp; Conditions.</a></strong>\n    </p>\n  </div>\n  <div class="spacer" style="height:10px;" id="pickupAtAgentLocation-spacer18"></div>\n  <form>\n    <ion-item>\n      <ion-label style="font-size: 14px">Check the box if you don&#39;t want to see <br> this screen in future transactions</ion-label>\n      <ion-checkbox color="" checked="false"></ion-checkbox>\n    </ion-item>\n    <div class="spacer" style="height:10px;" id="pickupAtAgentLocation-spacer19"></div>\n    <button id="pickupAtAgentLocation-button34" ion-button color="positive" block [navPush]="validation5">I Accept T&C\'s</button>\n  </form>\n  \n  \n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/pickup-at-agent-location/pickup-at-agent-location.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], PickupAtAgentLocationPage);

//# sourceMappingURL=pickup-at-agent-location.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validation5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_confirmation2_confirmation2__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Validation5Page = (function () {
    function Validation5Page(navCtrl) {
        this.navCtrl = navCtrl;
        this.confirmation2 = __WEBPACK_IMPORTED_MODULE_2__pages_confirmation2_confirmation2__["a" /* Confirmation2Page */];
    }
    return Validation5Page;
}());
Validation5Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-validation5',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/validation5/validation5.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Validation\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page15">\n  <h4 id="validation5-heading4" style="color:#000000;font-weight:400;text-align:center;">\n    Please select amount:\n  </h4>\n  <div class="spacer" style="height:15px;" id="validation5-spacer20"></div>\n  <h5 id="validation5-heading5" style="color:#000000;font-weight:400;text-align:center;">\n    Total Funds: $397.00\n  </h5>\n  <div class="spacer" style="height:15px;" id="validation5-spacer21"></div>\n  <h5 id="validation5-heading6" style="color:#000000;font-weight:400;text-align:center;">\n    Partial Funds: $0.00\n  </h5>\n  <div class="spacer" style="height:15px;" id="validation5-spacer22"></div>\n  <h5 id="validation5-heading7" style="color:#000000;font-weight:400;text-align:center;">\n    Remaining Funds: $0.00\n  </h5>\n  <div class="spacer" style="width:287px;height:30px;" id="validation5-spacer23"></div>\n  <div id="validation5-markdown17" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Your funds will be available immediately. A $1.00 fee apply.\n    </p>\n  </div>\n  <div class="spacer" style="width:287px;height:30px;" id="validation5-spacer24"></div>\n  <button id="validation5-button35" ion-button color="positive" block style="font-size:15px;" [navPush]="confirmation2">\n    I want to Pickup the selected funds from a participant agent location on the network\n  </button>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/validation5/validation5.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], Validation5Page);

//# sourceMappingURL=validation5.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Confirmation2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Confirmation2Page = (function () {
    function Confirmation2Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return Confirmation2Page;
}());
Confirmation2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-confirmation2',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/confirmation2/confirmation2.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Confirmation\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page16">\n  <div id="confirmation2-markdown18" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Congratulations! $396 are available for pickup at any Location on the NeEtwork. You will be prompted for a confirmation code. You can retrieve this code at any time on the main menu.\n    </p>\n  </div>\n  <div id="confirmation2-container9">\n    <h4 id="confirmation2-heading8" style="color:#000000;text-align:center;">\n      AS2MN10258\n    </h4>\n  </div>\n  <div class="spacer" style="height:15px;" id="confirmation2-spacer15"></div>\n  <div id="confirmation2-markdown11" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Please use these tools to locate the most convenient location for you.\n    </p>\n  </div>\n  <button id="confirmation2-button26" ion-button color="positive" block>\n    Use Location\n  </button>\n  <button id="confirmation2-button33" ion-button color="positive" block style="font-size:15px;">\n    Search by Name, Address or Zip Code\n  </button>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/confirmation2/confirmation2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], Confirmation2Page);

//# sourceMappingURL=confirmation2.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickupAtAtmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_validation6_validation6__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PickupAtAtmPage = (function () {
    function PickupAtAtmPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.validation6 = __WEBPACK_IMPORTED_MODULE_2__pages_validation6_validation6__["a" /* Validation6Page */];
    }
    return PickupAtAtmPage;
}());
PickupAtAtmPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pickup-at-atm',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/pickup-at-atm/pickup-at-atm.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Pickup at Atm\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page14">\n  <div class="spacer" style="height:10px;" id="pickupAtAtm-spacer25"></div>\n  <div id="pickupAtAtm-markdown12" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      You have selected to pickup your funds from a participant ATM on the Network. Please read carefully\n      <strong>\n        Full Terms &amp; Conditions.\n      </strong>\n    </p>\n  </div>\n  <div class="spacer" style="height:10px;" id="pickupAtAtm-spacer26"></div>\n  <form id="pickupAtAtm-form9">\n    <ion-item id="pickupAtAtm-checkbox3"></ion-item>\n  </form>\n  <div id="pickupAtAtm-markdown19" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Check the box if you don&#39;t want to see this screen in future transactions\n    </p>\n  </div>\n  <div class="spacer" style="height:10px;" id="pickupAtAtm-spacer27"></div>\n  <button id="pickupAtAtm-button36" ion-button color="positive" block [navPush]="validation6"></button>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/pickup-at-atm/pickup-at-atm.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], PickupAtAtmPage);

//# sourceMappingURL=pickup-at-atm.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validation6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_confirmation3_confirmation3__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Validation6Page = (function () {
    function Validation6Page(navCtrl) {
        this.navCtrl = navCtrl;
        this.confirmation3 = __WEBPACK_IMPORTED_MODULE_2__pages_confirmation3_confirmation3__["a" /* Confirmation3Page */];
    }
    return Validation6Page;
}());
Validation6Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-validation6',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/validation6/validation6.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Validation\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page17">\n  <h4 id="validation6-heading9" style="color:#000000;font-weight:400;text-align:center;">\n    Please select amount:\n  </h4>\n  <div class="spacer" style="height:15px;" id="validation6-spacer28"></div>\n  <h5 id="validation6-heading10" style="color:#000000;font-weight:400;text-align:center;">\n    Total Funds: $397.00\n  </h5>\n  <div class="spacer" style="height:15px;" id="validation6-spacer29"></div>\n  <h5 id="validation6-heading11" style="color:#000000;font-weight:400;text-align:center;">\n    Partial Funds: $0.00\n  </h5>\n  <div class="spacer" style="height:15px;" id="validation6-spacer30"></div>\n  <h5 id="validation6-heading12" style="color:#000000;font-weight:400;text-align:center;">\n    Remaining Funds: $0.00\n  </h5>\n  <div class="spacer" style="width:287px;height:30px;" id="validation6-spacer31"></div>\n  <div id="validation6-markdown20" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Your funds will be available immediately. A $1.00 fee apply.\n    </p>\n  </div>\n  <div class="spacer" style="width:287px;height:30px;" id="validation6-spacer32"></div>\n  <button id="validation6-button37" ion-button color="positive" block style="font-size:15px;" [navPush]="confirmation3">\n    I want to Pickup the selected funds from a participant ATM on the network\n  </button>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/validation6/validation6.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], Validation6Page);

//# sourceMappingURL=validation6.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Confirmation3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Confirmation3Page = (function () {
    function Confirmation3Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return Confirmation3Page;
}());
Confirmation3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-confirmation3',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/confirmation3/confirmation3.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Confirmation\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page18">\n  <div id="confirmation3-markdown21" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Congratulations! $396 are available for pickup at any Location on the NeEtwork. You will be prompted for a confirmation code. You can retrieve this code at any time on the main menu.\n    </p>\n  </div>\n  <div id="confirmation3-container10">\n    <h4 id="confirmation3-heading13" style="color:#000000;text-align:center;">\n      AS2MN10258\n    </h4>\n  </div>\n  <div class="spacer" style="height:15px;" id="confirmation3-spacer33"></div>\n  <div id="confirmation3-markdown22" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Please use these tools to locate the most convenient location for you.\n    </p>\n  </div>\n  <button id="confirmation3-button38" ion-button color="positive" block>\n    Use Location\n  </button>\n  <button id="confirmation3-button39" ion-button color="positive" block style="font-size:15px;">\n    Search by Name, Address or Zip Code\n  </button>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/confirmation3/confirmation3.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], Confirmation3Page);

//# sourceMappingURL=confirmation3.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmountDestinationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_beneficiary_beneficiary__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AmountDestinationPage = (function () {
    function AmountDestinationPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.beneficiary = __WEBPACK_IMPORTED_MODULE_2__pages_beneficiary_beneficiary__["a" /* BeneficiaryPage */];
    }
    return AmountDestinationPage;
}());
AmountDestinationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-amount-destination',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/amount-destination/amount-destination.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Amount & Destination\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page20">\n  <h4 id="amountDestination-heading14" style="color:#000000;text-align:center;">\n    How much you want to send ?\n  </h4>\n  <div id="amountDestination-container11">\n    <div class="spacer" style="height:10px;" id="amountDestination-spacer36"></div>\n    <div id="amountDestination-markdown25" style="text-align:center;" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        Total Founds: $397.00\n      </p>\n    </div>\n  </div>\n  <div class="spacer" style="height:5px;" id="amountDestination-spacer37"></div>\n  <div id="amountDestination-container12">\n    <div id="amountDestination-markdown27" style="text-align:center;" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        Partial Founds: $0.00\n      </p>\n    </div>\n  </div>\n  <div class="spacer" style="height:5px;" id="amountDestination-spacer38"></div>\n  <div id="amountDestination-container13">\n    <div id="amountDestination-markdown28" style="text-align:center;" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        Remaining Founds: $0.00\n      </p>\n    </div>\n  </div>\n  <div class="spacer" style="height:5px;" id="amountDestination-spacer39"></div>\n  <button id="amountDestination-button41" ion-button color="positive" block>\n    Select Destination Country\n  </button>\n  <button id="amountDestination-button42" ion-button color="positive" block>\n    Select Point of Payment\n  </button>\n  <button id="amountDestination-button43" ion-button color="positive" block>\n    Select Payment Method\n  </button>\n  <div class="spacer" style="height:5px;" id="amountDestination-spacer42"></div>\n  <div id="amountDestination-markdown29" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      You will send $389.00 to Guatemala @ 7.40 exchange rate. Q2,878.60 will be paid at Banrural in cash. A $8.00 fee apply.\n    </p>\n  </div>\n  <button id="amountDestination-button44" ion-button color="positive" block [navPush]="beneficiary">\n    Continue\n  </button>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/amount-destination/amount-destination.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], AmountDestinationPage);

//# sourceMappingURL=amount-destination.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeneficiaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_validation7_validation7__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeneficiaryPage = (function () {
    function BeneficiaryPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.validation7 = __WEBPACK_IMPORTED_MODULE_2__pages_validation7_validation7__["a" /* Validation7Page */];
    }
    return BeneficiaryPage;
}());
BeneficiaryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-beneficiary',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/beneficiary/beneficiary.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Beneficiary\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page21">\n  <div id="beneficiary-markdown30" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Who will receive the money ?\n    </p>\n  </div>\n  <button id="beneficiary-button45" ion-button color="positive" block>\n    Select an existing Beneficiary\n  </button>\n  <div id="beneficiary-markdown31" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Or register a new one:\n    </p>\n  </div>\n  <form id="beneficiary-form13">\n    <ion-item id="beneficiary-input21">\n      <ion-label>\n        Full Name\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="beneficiary-input22">\n      <ion-label>\n        Address\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="beneficiary-input23">\n      <ion-label>\n        City\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="beneficiary-input24">\n      <ion-label>\n        State\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="beneficiary-input25">\n      <ion-label>\n        Phone Number\n      </ion-label>\n      <ion-input type="tel" placeholder=""></ion-input>\n    </ion-item>\n  </form>\n  <div class="spacer" style="height:10px;" id="beneficiary-spacer43"></div>\n  <button id="beneficiary-button46" ion-button color="positive" block [navPush]="validation7">\n    Continue\n  </button>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/beneficiary/beneficiary.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], BeneficiaryPage);

//# sourceMappingURL=beneficiary.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validation7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_confirmation4_confirmation4__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Validation7Page = (function () {
    function Validation7Page(navCtrl) {
        this.navCtrl = navCtrl;
        this.confirmation4 = __WEBPACK_IMPORTED_MODULE_2__pages_confirmation4_confirmation4__["a" /* Confirmation4Page */];
    }
    return Validation7Page;
}());
Validation7Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-validation7',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/validation7/validation7.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Validation\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page22">\n  <div id="validation7-markdown32" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Please confirm your transaction:\n    </p>\n  </div>\n  <div id="validation7-container14">\n    <h4 id="validation7-heading15" style="color:#000000;">\n      Originator:\n    </h4>\n    <div id="validation7-markdown38" class="show-list-numbers-and-dots"></div>\n  </div>\n  <ion-list id="validation7-list8">\n    <ion-item id="validation7-list-item-container2">\n      <div id="validation7-markdown40" class="show-list-numbers-and-dots">\n        <p style="margin-top:0px;color:#000000;">\n          <strong>\n            Originator:\n          </strong>\n        </p>\n      </div>\n      <div id="validation7-markdown41" class="show-list-numbers-and-dots">\n        <p style="margin-top:0px;color:#000000;">\n          John Smith\n        </p>\n      </div>\n      <div id="validation7-markdown42" class="show-list-numbers-and-dots">\n        <p style="margin-top:0px;color:#000000;">\n          12300 SW 45 Av.\n        </p>\n      </div>\n      <div id="validation7-markdown43" class="show-list-numbers-and-dots">\n        <p style="margin-top:0px;color:#000000;">\n          Miami, FL 33130\n        </p>\n      </div>\n      <div id="validation7-markdown44" class="show-list-numbers-and-dots">\n        <p style="margin-top:0px;color:#000000;">\n          305-123-456\n        </p>\n      </div>\n    </ion-item>\n    <ion-item id="validation7-list-item-container3">\n      <div id="validation7-markdown45" class="show-list-numbers-and-dots">\n        <p style="margin-top:0px;color:#000000;">\n          <strong>\n            Beneficiary:\n          </strong>\n        </p>\n      </div>\n      <div id="validation7-markdown46" class="show-list-numbers-and-dots">\n        <p style="margin-top:0px;color:#000000;">\n          Juan Pérez\n        </p>\n      </div>\n      <div id="validation7-markdown47" class="show-list-numbers-and-dots">\n        <p style="margin-top:0px;color:#000000;">\n          1ra. Calle 2-34 Ave.\n        </p>\n      </div>\n      <div id="validation7-markdown48" class="show-list-numbers-and-dots">\n        <p style="margin-top:0px;color:#000000;">\n          Mixco, Guatemala\n        </p>\n      </div>\n      <div id="validation7-markdown49" class="show-list-numbers-and-dots">\n        <p style="margin-top:0px;color:#000000;">\n          502-1234-5678\n        </p>\n      </div>\n    </ion-item>\n    <ion-item id="validation7-list-item-container4">\n      <div id="validation7-markdown50" class="show-list-numbers-and-dots">\n        <p style="margin-top:0px;color:#000000;">\n          <strong>\n            Amount, Payment Point/Method:\n          </strong>\n        </p>\n      </div>\n      <div id="validation7-markdown51" class="show-list-numbers-and-dots">\n        <p style="margin-top:0px;color:#000000;">\n          $389.00 @7.40 = Q2,878.60\n        </p>\n      </div>\n      <div id="validation7-markdown52" class="show-list-numbers-and-dots">\n        <p style="margin-top:0px;color:#000000;">\n          Banrural - Cash\n        </p>\n      </div>\n    </ion-item>\n  </ion-list>\n  <button id="validation7-button48" ion-button color="positive" block [navPush]="confirmation4">\n    Confirm\n  </button>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/validation7/validation7.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], Validation7Page);

//# sourceMappingURL=validation7.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Confirmation4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Confirmation4Page = (function () {
    function Confirmation4Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return Confirmation4Page;
}());
Confirmation4Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-confirmation4',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/confirmation4/confirmation4.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Confirmation\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page23">\n  <div id="confirmation4-markdown55" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Congratulations! You have sent $389.00 to Juan Pérez in Guatemala. Q2,878.60 will be paid in cash at Banrural. Please provide this confirmation code to Juan Pérez, it will be reqired to pickup the money:\n    </p>\n  </div>\n  <h4 id="confirmation4-heading16" style="color:#000000;text-align:center;">\n    AS2MN10258\n  </h4>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/confirmation4/confirmation4.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], Confirmation4Page);

//# sourceMappingURL=confirmation4.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_scan_photo_id_scan_photo_id__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpPage = (function () {
    function SignUpPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.scanPhoto = __WEBPACK_IMPORTED_MODULE_2__pages_scan_photo_id_scan_photo_id__["a" /* ScanPhotoIdPage */];
    }
    return SignUpPage;
}());
SignUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sign-up',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/sign-up/sign-up.html"*/'<ion-header>\n  <ion-navbar color="dark" style="text-align: center">\n    <ion-title>\n      Sign-up\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <form id="signUp-form6">\n    <ion-list id="signUp-list1">\n    \n    <ion-grid>\n      <ion-row>\n        <ion-col>\n\n          <ion-item id="signUp-input9">\n\n            <ion-input type="text" placeholder="First Name" name="firstName"></ion-input>\n          </ion-item>\n\n        </ion-col>\n        <ion-col>\n          \n          <ion-item id="signUp-input13">\n            <ion-input type="text" placeholder="Mid Name" name="midName"></ion-input>\n          </ion-item>\n        \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item id="signUp-input14">\n            <ion-input type="text" placeholder="Last Name" name="lastName"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>  \n          <ion-item id="signUp-input15">\n            <ion-input type="text" placeholder="Maiden Name" name="maidenName"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n      <ion-item id="signUp-input11">\n        <ion-input type="email" placeholder="Email" name="email"></ion-input>\n      </ion-item>\n      <ion-item id="signUp-input12">\n        <ion-input type="text" placeholder="Choose a Password" name="choosePassword"></ion-input>\n      </ion-item>\n      <ion-item id="signUp-input16">\n        <ion-input type="text" placeholder="Re-enter Password" name="reenterPassword"></ion-input>\n      </ion-item>\n      <ion-item id="signUp-input17">\n        <ion-input type="text" placeholder="Mobile Phone Number (a 4-digit PIN will be set via SMS)" name="mobileNumber"></ion-input>\n      </ion-item>\n      <ion-item id="signUp-input20">\n        <ion-input type="text" placeholder="Please enter the 4-digit" name="mobileNumber"></ion-input>\n      </ion-item>\n    </ion-list>\n    <h6 style="text-align:right;"><a href="#">Didn\'t  get it  ?</a></h6>\n    <div class="spacer" style="height:10px;" id="validation3-spacer13"></div>\n    <button id="signUp-button4" ion-button color="positive" block [navPush]="scanPhoto">\n      Submit\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/sign-up/sign-up.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], SignUpPage);

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPhotoIdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_validation_validation__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScanPhotoIdPage = (function () {
    function ScanPhotoIdPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.validationPage = __WEBPACK_IMPORTED_MODULE_2__pages_validation_validation__["a" /* ValidationPage */];
    }
    return ScanPhotoIdPage;
}());
ScanPhotoIdPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-scan-photo-id',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/scan-photo-id/scan-photo-id.html"*/'<ion-header>\n  <ion-navbar color="dark" style="text-align: center">\n    <ion-title>\n      Scan Photo Id\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <h4 id="scanPhotoId-heading3" style="color:#000000;font-weight:400;text-align:center;">\n    Thank tou! Your mobile phone was validated. Now you need to scan a valid and current Photo-ID to complete the process.\n  </h4>\n  <div class="spacer" style="height:70px;" id="scanPhotoId-spacer2"></div>\n  <div id="scanPhotoId-container5">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button style="height: 65px" id="scanPhotoId-button6" ion-button color="positive" block>\n            <nav>\n              <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n              <br><label>Front</label>\n            </nav>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button style="height: 65px" id="scanPhotoId-button7" ion-button color="positive" block>\n            <div>\n              <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n              <br><label>Back</label>\n            </div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n  <div class="spacer" style="height:50px;" id="scanPhotoId-spacer3"></div>\n  <div id="scanPhotoId-container6">\n    <button id="scanPhotoId-button8" ion-button color="positive" block [navPush]="validationPage">\n      Submit\n    </button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/scan-photo-id/scan-photo-id.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ScanPhotoIdPage);

//# sourceMappingURL=scan-photo-id.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_welcome_welcome__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValidationPage = (function () {
    function ValidationPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.welcomePage = __WEBPACK_IMPORTED_MODULE_2__pages_welcome_welcome__["a" /* WelcomePage */];
    }
    return ValidationPage;
}());
ValidationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-validation',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/validation/validation.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      Validation\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <div id="validation-container7">\n    <div id="validation-markdown1" style="text-align:center;" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        Thank you! The scan of your Photo-ID was received. it could take up to 5 mins for processing and validation. You won&#39;t see the main menu until this process is completed.\n      </p>\n    </div>\n  </div>\n  <div class="spacer" style="height:60px;" id="validation-spacer4"></div>\n  <div id="validation-container8">\n    <button id="validation-button9" ion-button color="positive" block [navPush]="welcomePage">\n      Check Status\n    </button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/validation/validation.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ValidationPage);

//# sourceMappingURL=validation.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_sign_up_sign_up__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_scan_photo_id_scan_photo_id__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_validation_validation__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_main_menu_main_menu__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cash_acheck_cash_acheck__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_scan_check_scan_check__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_validation2_validation2__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_confirmation_confirmation__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_validation3_validation3__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_validation4_validation4__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pickup_at_agent_location_pickup_at_agent_location__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pickup_at_atm_pickup_at_atm__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_validation5_validation5__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_validation6_validation6__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_confirmation2_confirmation2__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_confirmation3_confirmation3__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_send_money_send_money__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_amount_destination_amount_destination__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_beneficiary_beneficiary__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_validation7_validation7__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_confirmation4_confirmation4__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_sign_up_sign_up__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_scan_photo_id_scan_photo_id__["a" /* ScanPhotoIdPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_validation_validation__["a" /* ValidationPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_main_menu_main_menu__["a" /* MainMenuPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_cash_acheck_cash_acheck__["a" /* CashACheckPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_scan_check_scan_check__["a" /* ScanCheckPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_validation2_validation2__["a" /* Validation2Page */],
            __WEBPACK_IMPORTED_MODULE_12__pages_confirmation_confirmation__["a" /* ConfirmationPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_validation3_validation3__["a" /* Validation3Page */],
            __WEBPACK_IMPORTED_MODULE_14__pages_validation4_validation4__["a" /* Validation4Page */],
            __WEBPACK_IMPORTED_MODULE_15__pages_pickup_at_agent_location_pickup_at_agent_location__["a" /* PickupAtAgentLocationPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_pickup_at_atm_pickup_at_atm__["a" /* PickupAtAtmPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_validation5_validation5__["a" /* Validation5Page */],
            __WEBPACK_IMPORTED_MODULE_18__pages_validation6_validation6__["a" /* Validation6Page */],
            __WEBPACK_IMPORTED_MODULE_19__pages_confirmation2_confirmation2__["a" /* Confirmation2Page */],
            __WEBPACK_IMPORTED_MODULE_20__pages_confirmation3_confirmation3__["a" /* Confirmation3Page */],
            __WEBPACK_IMPORTED_MODULE_21__pages_send_money_send_money__["a" /* SendMoneyPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_amount_destination_amount_destination__["a" /* AmountDestinationPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_beneficiary_beneficiary__["a" /* BeneficiaryPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_validation7_validation7__["a" /* Validation7Page */],
            __WEBPACK_IMPORTED_MODULE_25__pages_confirmation4_confirmation4__["a" /* Confirmation4Page */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_sign_up_sign_up__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_scan_photo_id_scan_photo_id__["a" /* ScanPhotoIdPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_validation_validation__["a" /* ValidationPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_main_menu_main_menu__["a" /* MainMenuPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_cash_acheck_cash_acheck__["a" /* CashACheckPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_scan_check_scan_check__["a" /* ScanCheckPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_validation2_validation2__["a" /* Validation2Page */],
            __WEBPACK_IMPORTED_MODULE_12__pages_confirmation_confirmation__["a" /* ConfirmationPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_validation3_validation3__["a" /* Validation3Page */],
            __WEBPACK_IMPORTED_MODULE_14__pages_validation4_validation4__["a" /* Validation4Page */],
            __WEBPACK_IMPORTED_MODULE_15__pages_pickup_at_agent_location_pickup_at_agent_location__["a" /* PickupAtAgentLocationPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_pickup_at_atm_pickup_at_atm__["a" /* PickupAtAtmPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_validation5_validation5__["a" /* Validation5Page */],
            __WEBPACK_IMPORTED_MODULE_18__pages_validation6_validation6__["a" /* Validation6Page */],
            __WEBPACK_IMPORTED_MODULE_19__pages_confirmation2_confirmation2__["a" /* Confirmation2Page */],
            __WEBPACK_IMPORTED_MODULE_20__pages_confirmation3_confirmation3__["a" /* Confirmation3Page */],
            __WEBPACK_IMPORTED_MODULE_21__pages_send_money_send_money__["a" /* SendMoneyPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_amount_destination_amount_destination__["a" /* AmountDestinationPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_beneficiary_beneficiary__["a" /* BeneficiaryPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_validation7_validation7__["a" /* Validation7Page */],
            __WEBPACK_IMPORTED_MODULE_25__pages_confirmation4_confirmation4__["a" /* Confirmation4Page */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_main_menu_main_menu__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_sign_up_sign_up__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WelcomePage = (function () {
    function WelcomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.mainMenu = __WEBPACK_IMPORTED_MODULE_2__pages_main_menu_main_menu__["a" /* MainMenuPage */];
        this.signUp = __WEBPACK_IMPORTED_MODULE_3__pages_sign_up_sign_up__["a" /* SignUpPage */];
    }
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/welcome/welcome.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Welcome\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <h4 id="welcome-heading1" style="color:#000000;font-weight:400;text-align:center;">\n    Registered User?\n  </h4>\n  <div id="welcome-container2">\n    <form id="welcome-form5">\n      <ion-item id="welcome-input8">\n        <ion-label>\n          \n        </ion-label>\n        <ion-input type="text" placeholder="User" name="user"></ion-input>\n      </ion-item>\n      <ion-item id="welcome-input10">\n        <ion-label>\n\n        </ion-label>\n        <ion-input type="text" placeholder="Password" name="password"></ion-input>\n      </ion-item>\n      <div class="spacer" style="height:30px;" id="validation3-spacer13"></div>\n      <button id="welcome-button2" ion-button color="positive" block [navPush]="mainMenu">\n        Login\n      </button>\n    </form>\n    <h6 style="text-align:right;"><a href="#">Forgot ?</a></h6>\n  </div>\n  <div class="spacer" style="height:70px;" id="welcome-spacer1"></div>\n  <div id="welcome-container3">\n    <h4 id="welcome-heading2" style="color:#000000;font-weight:400;text-align:center;">\n      Are you a New User ?\n    </h4>\n    <button id="welcome-button3" ion-button color="positive" block [navPush]="signUp">\n      Sing-Up\n    </button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/welcome/welcome.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendMoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_amount_destination_amount_destination__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendMoneyPage = (function () {
    function SendMoneyPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.amountDestination = __WEBPACK_IMPORTED_MODULE_2__pages_amount_destination_amount_destination__["a" /* AmountDestinationPage */];
    }
    return SendMoneyPage;
}());
SendMoneyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-send-money',template:/*ion-inline-start:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/send-money/send-money.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Send Money\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page19">\n  <div id="sendMoney-markdown23" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      You are about to Send Money to a third party. Please read carefully\n      <strong>\n        Full Terms &amp; Conditions.\n      </strong>\n    </p>\n  </div>\n  <form id="sendMoney-form11">\n    <div class="spacer" style="height:10px;" id="sendMoney-spacer34"></div>\n    <ion-item id="sendMoney-checkbox4"></ion-item>\n  </form>\n  <div id="sendMoney-markdown24" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Check the box if you don&#39;t want to see this screen in the future transactions\n    </p>\n  </div>\n  <div class="spacer" style="height:15px;" id="sendMoney-spacer35"></div>\n  <button id="sendMoney-button40" ion-button color="positive" block [navPush]="amountDestination"></button>\n</ion-content>'/*ion-inline-end:"/home/nelson/EBCLOSION/ionic/afinemo/src/pages/send-money/send-money.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], SendMoneyPage);

//# sourceMappingURL=send-money.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map
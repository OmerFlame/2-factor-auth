import { Component, OnInit } from '@angular/core';
import { WindowService } from '../window.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})
export class PhoneLoginComponent implements OnInit {
  windowRef: any;
  phoneNumber = new this.phoneNumber()
  verificationCode: string;

  user: any;

  constructor(private win: WindowService) {  }

  ngOnInit() {
    this.windowRef = this.win.windowRef;
    this.windowRef.racaptchaVerifier.render();
  }


  sendLoginCode() {
    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
    .then(result => {
      this.windowRef.confirmationResult = result;
    })
    .catch( error => console.log(error) );
  }

  verifyLoginCode() {
    this.windowRef.confirmationResult.confirm(this.verificationCode).then( result => {
      this.user = result.user;
    }).catch( error => console.log(error, "Incorrect code entered?"));
  }


  country: string;
  area: string;
  prefix: string;
  line: string;

  get e164() {
    const num = this.country + this.area + this.prefix + this.line;
    return `+${num}`;
  }

}

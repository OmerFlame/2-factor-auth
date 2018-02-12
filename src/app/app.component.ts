import { Component } from '@angular/core';
import speakeasy from 'speakeasy';
import QRCode from 'qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secret: any;

  GenerateSecretKey() {
    this.secret = speakeasy.generateSecret({length: 20});
    console.log(this.secret.base32);
  }

  GenerateQR() {
    QRCode.toDataURL(this.secret.otpauth_url, function(err, image_data) {
      console.log(image_data);
    });
  }
}

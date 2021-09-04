import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.page.html',
  styleUrls: ['./otp-verify.page.scss'],
})
export class OtpVerifyPage implements OnInit {

  constructor(public router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  home() {
    // this.router.navigate(['/tabs/tab1']);
    this.authService.login();
  }

  moveToNext(nextElement) {
    console.log('next element is',nextElement);
    nextElement.setFocus();
  }
}

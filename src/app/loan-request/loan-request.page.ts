import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../service/alert.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.page.html',
  styleUrls: ['./loan-request.page.scss'],
})
export class LoanRequestPage implements OnInit {
  customerId : any;
  constructor(public router: Router, private alertService: AlertService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.customerId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  SubmitRequest() {
    console.log('this.customerId', this.customerId);
    this.alertService.presentAlert('Our team will contact you shortly in registered mobile number');
    this.router.navigate(['/tabs/tab1']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from './tab1.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  customerInfo = [];

  constructor(public router: Router, private activatedRoute: ActivatedRoute, private homeService: HomeService) {}

  ngOnInit() {
    // Get the ID that was passed with the URL
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
    let id = '60275519f6ae0263c1cf9a89';
 
    // Get the information from the API
    this.homeService.getDetails(id).subscribe(result => {
      // this.information = result;
      console.log('result', result);
      this.customerInfo = result['DATA'][0];
    });
  }

  loanDetails(id) {
    this.router.navigate(['/tabs/tab1/loan-details',id]);
  }

  loanRequest(customerId) {
    this.router.navigate(['/tabs/tab1/loan-request', customerId]);
  }
}

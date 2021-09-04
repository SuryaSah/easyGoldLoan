import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import {LoanService} from './loan-details.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.page.html',
  styleUrls: ['./loan-details.page.scss'],
})
export class LoanDetailsPage implements OnInit {
  loanInfo = {};
  constructor(public router: Router, private activatedRoute: ActivatedRoute, private loanService: LoanService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loanService.getLoanDetails(id).subscribe(loanInfoData => {
      this.loanInfo = loanInfoData['DATA'];
      console.log('loanInfo',this.loanInfo);
    })
  }

  accountStatement(id){
    this.router.navigate(['/tabs/tab1/account-summary', id]);
  }
}

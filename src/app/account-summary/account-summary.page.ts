import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from './account-summary.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.page.html',
  styleUrls: ['./account-summary.page.scss'],
})
export class AccountSummaryPage implements OnInit {
  acHistory = [];
  constructor(private activatedRoute: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.accountService.getCustomerACHistory(id).subscribe(acInfoData => {
      this.acHistory = acInfoData['DATA'][0].paymentDetails;
      console.log('loanInfo',this.acHistory);
    })
  }

}

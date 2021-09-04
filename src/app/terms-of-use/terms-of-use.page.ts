import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.page.html',
  styleUrls: ['./terms-of-use.page.scss'],
})
export class TermsOfUsePage implements OnInit {
  technologies : Array<{ name: string, description: string}> = [
    {
       name : 'Introduction',
       description : `We value the trust you place in us. That's why we insist upon the highest standards for secure transactions and customer information privacy. Please read the following statement to learn about our information gathering and dissemination practices.

       Note: Our privacy policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically.
       
       By visiting this Website or mobile application you agree to be bound by the terms and conditions of this Privacy Policy. If you do not agree please do not use or access our Website.
       
       By mere use of the Website, you expressly consent to our use and disclosure of your personal information in accordance with this Privacy Policy. This Privacy Policy is incorporated into and subject to the Terms of Use.`
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

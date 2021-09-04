import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanRequestPage } from './loan-request.page';

describe('LoanRequestPage', () => {
  let component: LoanRequestPage;
  let fixture: ComponentFixture<LoanRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

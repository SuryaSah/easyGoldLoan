import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EglCreditPage } from './egl-credit.page';

describe('EglCreditPage', () => {
  let component: EglCreditPage;
  let fixture: ComponentFixture<EglCreditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EglCreditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EglCreditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

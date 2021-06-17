import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CssAccordianComponent } from './css-accordian.component';

describe('CssAccordianComponent', () => {
  let component: CssAccordianComponent;
  let fixture: ComponentFixture<CssAccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CssAccordianComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CssAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

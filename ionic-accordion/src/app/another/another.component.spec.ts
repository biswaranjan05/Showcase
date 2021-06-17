import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnotherComponent } from './another.component';

describe('AnotherComponent', () => {
  let component: AnotherComponent;
  let fixture: ComponentFixture<AnotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnotherComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

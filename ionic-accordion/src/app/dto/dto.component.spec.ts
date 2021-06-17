import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DTOComponent } from './dto.component';

describe('DTOComponent', () => {
  let component: DTOComponent;
  let fixture: ComponentFixture<DTOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DTOComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DTOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

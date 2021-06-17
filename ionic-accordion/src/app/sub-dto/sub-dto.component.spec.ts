import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubDtoComponent } from './sub-dto.component';

describe('SubDtoComponent', () => {
  let component: SubDtoComponent;
  let fixture: ComponentFixture<SubDtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubDtoComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

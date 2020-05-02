import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetMedicalCardComponent } from './pet-medical-card.component';

describe('PetMedicalCardComponent', () => {
  let component: PetMedicalCardComponent;
  let fixture: ComponentFixture<PetMedicalCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetMedicalCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetMedicalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

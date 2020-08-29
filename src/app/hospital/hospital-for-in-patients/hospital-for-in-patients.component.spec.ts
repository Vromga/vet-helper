import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalForInPatientsComponent } from './hospital-for-in-patients.component';

describe('HospitalForInPatientsComponent', () => {
  let component: HospitalForInPatientsComponent;
  let fixture: ComponentFixture<HospitalForInPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalForInPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalForInPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

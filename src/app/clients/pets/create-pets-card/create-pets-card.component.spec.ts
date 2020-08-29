import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePetsCardComponent } from './create-pets-card.component';

describe('CreatePetsCardComponent', () => {
  let component: CreatePetsCardComponent;
  let fixture: ComponentFixture<CreatePetsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePetsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePetsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

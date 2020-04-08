import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClientCardComponent } from './create-client-card.component';

describe('CreateClientCardComponent', () => {
  let component: CreateClientCardComponent;
  let fixture: ComponentFixture<CreateClientCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClientCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClientCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

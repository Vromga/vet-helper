import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSendMailComponent } from './client-send-mail.component';

describe('ClientSendMailComponent', () => {
  let component: ClientSendMailComponent;
  let fixture: ComponentFixture<ClientSendMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSendMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSendMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

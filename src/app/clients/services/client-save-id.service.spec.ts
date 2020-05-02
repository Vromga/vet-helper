import { TestBed } from '@angular/core/testing';

import { ClientSaveIdService } from './client-save-id.service';

describe('ClientSaveIdService', () => {
  let service: ClientSaveIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientSaveIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

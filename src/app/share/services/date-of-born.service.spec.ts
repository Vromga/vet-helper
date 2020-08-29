import { TestBed } from '@angular/core/testing';

import { DateOfBornService } from './date-of-born.service';

describe('DateOfBornService', () => {
  let service: DateOfBornService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateOfBornService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

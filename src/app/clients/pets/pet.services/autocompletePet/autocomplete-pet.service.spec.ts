import { TestBed } from '@angular/core/testing';

import { AutocompletePetService } from './autocomplete-pet.service';

describe('AutocomplitePetService', () => {
  let service: AutocompletePetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutocompletePetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

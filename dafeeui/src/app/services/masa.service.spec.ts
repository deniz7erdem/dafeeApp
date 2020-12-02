import { TestBed } from '@angular/core/testing';

import { MasaService } from './masa.service';

describe('MasaService', () => {
  let service: MasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

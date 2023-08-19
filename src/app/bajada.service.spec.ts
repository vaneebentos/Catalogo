import { TestBed } from '@angular/core/testing';

import { BajadaService } from './bajada.service';

describe('BajadaService', () => {
  let service: BajadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BajadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

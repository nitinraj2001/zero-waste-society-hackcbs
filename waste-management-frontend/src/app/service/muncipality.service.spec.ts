import { TestBed } from '@angular/core/testing';

import { MuncipalityService } from './muncipality.service';

describe('MuncipalityService', () => {
  let service: MuncipalityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuncipalityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SlumAreaService } from './slum-area.service';

describe('SlumAreaService', () => {
  let service: SlumAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlumAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

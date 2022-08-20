import { TestBed } from '@angular/core/testing';

import { PickUpScheduleService } from './pick-up-schedule.service';

describe('PickUpScheduleService', () => {
  let service: PickUpScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickUpScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

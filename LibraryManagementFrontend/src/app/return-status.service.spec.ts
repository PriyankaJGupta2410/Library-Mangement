import { TestBed } from '@angular/core/testing';

import { ReturnStatusService } from './return-status.service';

describe('ReturnStatusService', () => {
  let service: ReturnStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

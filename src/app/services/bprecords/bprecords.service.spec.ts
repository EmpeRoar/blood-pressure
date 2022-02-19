import { TestBed } from '@angular/core/testing';

import { BprecordsService } from './bprecords.service';

describe('BprecordsService', () => {
  let service: BprecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BprecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

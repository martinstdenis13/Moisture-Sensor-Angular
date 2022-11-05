import { TestBed } from '@angular/core/testing';

import { DataRetService } from './data-ret.service';

describe('DataRetService', () => {
  let service: DataRetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataRetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

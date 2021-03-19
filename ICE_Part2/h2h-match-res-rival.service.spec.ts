import { TestBed } from '@angular/core/testing';

import { H2hMatchResRivalService } from './h2h-match-res-rival.service';

describe('H2hMatchResRivalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: H2hMatchResRivalService = TestBed.get(H2hMatchResRivalService);
    expect(service).toBeTruthy();
  });
});

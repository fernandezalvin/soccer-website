import { TestBed } from '@angular/core/testing';

import { LastGameResultService } from './last-game-result.service';

describe('LastGameResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LastGameResultService = TestBed.get(LastGameResultService);
    expect(service).toBeTruthy();
  });
});

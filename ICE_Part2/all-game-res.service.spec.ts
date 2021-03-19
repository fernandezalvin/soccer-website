import { TestBed } from '@angular/core/testing';

import { AllGameResService } from './all-game-res.service';

describe('AllGameResService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllGameResService = TestBed.get(AllGameResService);
    expect(service).toBeTruthy();
  });
});

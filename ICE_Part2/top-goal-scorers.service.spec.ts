import { TestBed } from '@angular/core/testing';

import { TopGoalScorersService } from './top-goal-scorers.service';

describe('TopGoalScorersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopGoalScorersService = TestBed.get(TopGoalScorersService);
    expect(service).toBeTruthy();
  });
});

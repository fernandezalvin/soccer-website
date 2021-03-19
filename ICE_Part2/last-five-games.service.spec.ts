import { TestBed } from '@angular/core/testing';

import { LastFiveGamesService } from './last-five-games.service';

describe('LastFiveGamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LastFiveGamesService = TestBed.get(LastFiveGamesService);
    expect(service).toBeTruthy();
  });
});

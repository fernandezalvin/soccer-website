import { TestBed } from '@angular/core/testing';

import { PlayerPerfService } from './player-perf.service';

describe('PlayerPerfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerPerfService = TestBed.get(PlayerPerfService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LastGameServiceService } from './last-game-service.service';

describe('LastGameServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LastGameServiceService = TestBed.get(LastGameServiceService);
    expect(service).toBeTruthy();
  });
});

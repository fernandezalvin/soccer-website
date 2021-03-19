import { TestBed } from '@angular/core/testing';

import { MainApiService } from './main-api.service';

describe('MainApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainApiService = TestBed.get(MainApiService);
    expect(service).toBeTruthy();
  });
});

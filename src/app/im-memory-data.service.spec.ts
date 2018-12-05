import { TestBed } from '@angular/core/testing';

import { ImMemoryDataService } from './im-memory-data.service';

describe('ImMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImMemoryDataService = TestBed.get(ImMemoryDataService);
    expect(service).toBeTruthy();
  });
});

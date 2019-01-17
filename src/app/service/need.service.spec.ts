import { TestBed } from '@angular/core/testing';

import { NeedService } from './need.service';

describe('NeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NeedService = TestBed.get(NeedService);
    expect(service).toBeTruthy();
  });
});

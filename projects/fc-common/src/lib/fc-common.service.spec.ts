import { TestBed } from '@angular/core/testing';

import { FcCommonService } from './fc-common.service';

describe('FcCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FcCommonService = TestBed.get(FcCommonService);
    expect(service).toBeTruthy();
  });
});

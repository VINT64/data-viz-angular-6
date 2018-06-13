import { TestBed, inject } from '@angular/core/testing';

import { QtsService } from './qts.service';

describe('QtsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QtsService]
    });
  });

  it('should be created', inject([QtsService], (service: QtsService) => {
    expect(service).toBeTruthy();
  }));
});

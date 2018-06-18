import { TestBed, inject } from '@angular/core/testing';

import { QtsService } from './qts.service';
import { QtsModule } from './qts.module';

describe('QtsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QtsService],
      imports: [ QtsModule ],
    });
  });

  it('should be created', inject([QtsService], (service: QtsService) => {
    expect(service).toBeTruthy();
  }));
});

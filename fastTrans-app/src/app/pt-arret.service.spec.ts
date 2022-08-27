import { TestBed } from '@angular/core/testing';

import { PtArretService } from './pt-arret.service';

describe('PtArretService', () => {
  let service: PtArretService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PtArretService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

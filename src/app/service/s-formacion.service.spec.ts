import { TestBed } from '@angular/core/testing';

import { SFormacionService } from './s-formacion.service';

describe('SFormacionService', () => {
  let service: SFormacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SFormacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

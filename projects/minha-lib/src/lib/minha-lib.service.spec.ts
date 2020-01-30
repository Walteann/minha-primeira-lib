import { TestBed } from '@angular/core/testing';

import { MinhaLibService } from './minha-lib.service';

describe('MinhaLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MinhaLibService = TestBed.get(MinhaLibService);
    expect(service).toBeTruthy();
  });
});

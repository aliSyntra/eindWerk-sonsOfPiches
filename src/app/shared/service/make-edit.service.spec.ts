import { TestBed } from '@angular/core/testing';

import { MakeEditService } from './make-edit.service';

describe('MakeEditService', () => {
  let service: MakeEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

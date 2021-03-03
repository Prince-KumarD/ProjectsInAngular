import { TestBed } from '@angular/core/testing';

import { DeshbordService } from './deshbord.service';

describe('DeshbordService', () => {
  let service: DeshbordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeshbordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

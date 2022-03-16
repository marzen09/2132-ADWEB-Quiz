import { TestBed } from '@angular/core/testing';

import { MyserviceeService } from './myservicee.service';

describe('MyserviceeService', () => {
  let service: MyserviceeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyserviceeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

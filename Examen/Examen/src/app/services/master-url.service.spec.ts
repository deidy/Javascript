/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MasterURLService } from './master-url.service';

describe('MasterURLService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterURLService]
    });
  });

  it('should ...', inject([MasterURLService], (service: MasterURLService) => {
    expect(service).toBeTruthy();
  }));
});

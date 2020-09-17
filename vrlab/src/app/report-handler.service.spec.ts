import { TestBed } from '@angular/core/testing';

import { ReportHandlerService } from './report-handler.service';

describe('ReportHandlerService', () => {
  let service: ReportHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

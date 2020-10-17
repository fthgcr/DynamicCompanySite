import { TestBed } from '@angular/core/testing';

import { AdminSliderService } from './admin-slider.service';

describe('AdminSliderService', () => {
  let service: AdminSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MicroServicioPanteraService } from './micro-servicio-pantera.service';

describe('MicroServicioPanteraService', () => {
  let service: MicroServicioPanteraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicroServicioPanteraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

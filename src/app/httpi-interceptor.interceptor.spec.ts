import { TestBed } from '@angular/core/testing';

import { HttpiInterceptorInterceptor } from './httpi-interceptor.interceptor';

describe('HttpiInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpiInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpiInterceptorInterceptor = TestBed.inject(HttpiInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

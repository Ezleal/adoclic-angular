import { TestBed } from '@angular/core/testing';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FakeApiInterceptor } from './fake-api.interceptor';

describe('FakeApiInterceptor', () => {
  let interceptor: HttpInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FakeApiInterceptor
      ]
    });

    interceptor = TestBed.inject(FakeApiInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should intercept HTTP requests', (done: DoneFn) => {
    const request = new HttpRequest('GET', 'api/data');
    const next: HttpHandler = {
      handle: (req) => {
        const response = new HttpResponse({ status: 200, body: { message: 'Fake data' } });
        return of(response);
      }
    };

    interceptor.intercept(request, next).subscribe((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        expect(event.status).toBe(200);
        expect(event.body).toEqual({ message: 'Fake data' });
        done();
      }
    });
  });
});

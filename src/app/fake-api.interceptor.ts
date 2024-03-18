import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Injectable()
export class FakeApiInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (request.url.endsWith('/login') && request.method === 'POST') {
      const { email, password } = request.body;
      if (email === 'user@demo.com' && password === '123456') {
        this.authService.setAuthenticated(true);
        return of(new HttpResponse({ status: 200, body: { success: true } })).pipe(delay(1000));
      } else {
        return of(new HttpResponse({ status: 401, body: { success: false, message: 'Credenciales inválidas' } })).pipe(delay(1000));
      }
    }

    return next.handle(request);
  }
}

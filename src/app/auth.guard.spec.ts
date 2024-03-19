import { TestBed } from '@angular/core/testing';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth/auth.service';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const authServiceSpyObj = jasmine.createSpyObj('AuthService', ['isAuthenticated$']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['createUrlTree']);

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authServiceSpyObj },
        { provide: Router, useValue: routerSpyObj }
      ]
    });

    authGuard = TestBed.inject(AuthGuard);
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should allow navigation if user is authenticated', () => {
    const isAuthenticated$ = of(true);
    const authServiceSpyObj = jasmine.createSpyObj('AuthService', ['isAuthenticated$']);
    authServiceSpyObj.isAuthenticated$.and.returnValue(isAuthenticated$);

    const result = authGuard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);

    expect(result).toEqual(of(true));
  });

  it('should redirect to login page if user is not authenticated', () => {
    const isAuthenticated$ = of(false);
    const authServiceSpyObj = jasmine.createSpyObj('AuthService', ['isAuthenticated$']);
    authServiceSpyObj.isAuthenticated$.and.returnValue(isAuthenticated$);
    const urlTree = new UrlTree();

    routerSpy.createUrlTree.and.returnValue(urlTree);

    const result = authGuard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);

    expect(result).toEqual(of(urlTree));
  });
});

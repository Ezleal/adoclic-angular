import { AuthGuard } from './../auth.guard';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth/auth.service';
import { of } from 'rxjs';
import { FakeApiInterceptor } from '../fake-api.interceptor';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [AuthService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error message for invalid form', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.error-message')).toBeNull();
    component.loginForm.controls['email'].setValue('test@test.com');
    component.loginForm.controls['password'].setValue('123');
    component.login();
    fixture.detectChanges();
    expect(compiled.querySelector('.error-message').textContent).toContain('Credenciales incorrectas.');
  });

  it('should call login method on form submit', () => {
    spyOn(component, 'login');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.login).toHaveBeenCalled();
  });

  it('should redirect to product list on successful login', () => {
    spyOn(authService, 'login').and.returnValue(of({ success: true }));
    spyOn(component.router, 'navigateByUrl');
    component.login();
    expect(component.router.navigateByUrl).toHaveBeenCalledWith('/product-list');
  });

  it('should handle login error', () => {
    spyOn(authService, 'login').and.returnValue(of({ success: false }));
    component.login();
    expect(component.loginError).toEqual('Credenciales incorrectas.');
  });
});

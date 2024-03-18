import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeApiInterceptor } from '../fake-api.interceptor';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: FakeApiInterceptor, multi: true }
  ],
})
export class AuthModule { }

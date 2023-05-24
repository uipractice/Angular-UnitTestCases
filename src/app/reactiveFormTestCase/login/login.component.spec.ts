import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,FormsModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });
  it('email field validity', () => {
    let email = component.loginForm.controls['email']; (1)
    expect(email.valid).toBeFalsy(); (2)
  });
  it('check login form is valid when validations are fulfiled',()=>{
    const LoginFormUserElement:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#loginForm').querySelectorAll('input')[0]
    const LoginFormPasswordElement:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#loginForm').querySelectorAll('input')[1]
    LoginFormUserElement.value='swaroop@gmail.com'
    LoginFormPasswordElement.value='12345'
    LoginFormUserElement.dispatchEvent(new Event('input'))
    LoginFormPasswordElement.dispatchEvent(new Event('input'))
    const isLoginFormValid=component.loginForm.valid
    fixture.whenStable().then(()=>{
      expect(isLoginFormValid).toBeFalsy()
    })


  })
});

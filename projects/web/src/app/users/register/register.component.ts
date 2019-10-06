import { Component, OnInit } from '@angular/core';
import { AuthService } from '@web/core/services/auth.service';
import { FormGroup, FormControl, EmailValidator, Validators } from '@angular/forms';

@Component({
  selector: 'fc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage: string;
  successMessage: string;
  registerForm: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', {
        validators: [
          Validators.email,
          Validators.required,
          Validators.minLength(6)
        ]
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(6)
        ]
      }),
      passwordConfirm: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(6)
        ]
      })
    },
                                      { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value
       ? null : { mismatch: true };
  }


  tryRegister(value: any) {
    this.authService.doRegister(value)
    .then(
      (res: any) => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
      },
      (err: { message: string; }) => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      });
  }

}

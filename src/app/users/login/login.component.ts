import { AuthService } from '@app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  signInWithEmail() {
    this.authService.doEmailAndPasswordLogin(this.user.email, this.user.password)
       .then((res) => {
         console.log(res);

         this.router.navigate(['/board']);
       })
       .catch((err) => {
         // tslint:disable-next-line: no-console
         return console.debug(`error: ${err}`);
       });
  }

  signInWithFacebook() {
    this.authService.doFacebookLogin()
    .then((res) => {
      this.router.navigate(['/board']);
    })
    .catch((err) => {
      // tslint:disable-next-line: no-console
      return console.debug(err);
    });
  }

  signInWithGoogle() {
    this.authService.doGoogleLogin()
    .then((res) => {
      this.router.navigate(['/board']);
    })
    .catch((err) => {
      // tslint:disable-next-line: no-console
      return console.debug(err);
    });
  }

  signInWithGithub() {
    this.authService.doGithubLogin()
    .then((res) => {
      this.router.navigate(['/board']);
    })
    .catch((err) => {
      // tslint:disable-next-line: no-console
      return console.debug(err);
    });
  }

}

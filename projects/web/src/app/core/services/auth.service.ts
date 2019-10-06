import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  public authenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) {
    this.user = afAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          this.authenticated$.next(true);
          // tslint:disable-next-line: no-console
          console.debug(this.userDetails);
        } else {
          this.userDetails = null;
          this.authenticated$.next(false);
        }
      }
    );
  }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new auth.FacebookAuthProvider();
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(
        (res: any) => {
          resolve(res);
        },
        (err: any) => {
          console.log(err);
          reject(err);
        });
    });
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
        .then(
          (res: any) => {
            resolve(res);
          },
          (err: any) => {
          // tslint:disable-next-line: no-console
            console.debug(err);
            reject(err);
          });
    });
  }

  doGithubLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new auth.GithubAuthProvider();
      provider.addScope('read:user');
      provider.addScope('user:email');
      this.afAuth.auth
      .signInWithPopup(provider)
        .then(
          (res: any) => {
            resolve(res);
          },
          (err: any) => {
          // tslint:disable-next-line: no-console
            console.debug(err);
            reject(err);
          });
    });
  }

  doEmailAndPasswordLogin(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      const credential = auth.EmailAuthProvider.credential(email, password);
      this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
        .then(
          (res: any) => {
            resolve(res);
          },
          (err: any) => {
            // tslint:disable-next-line: no-console
            console.debug(err);
            reject(err);
          });
    });
  }

  doRegister(value: { email: string; password: string; }) {
    return new Promise<any>((resolve, reject) => {
      auth().createUserWithEmailAndPassword(value.email, value.password)
      .then((res: any) => {
        resolve(res);
      },    err => reject(err));
    });
  }

  isLoggedIn(): boolean {
    if (this.userDetails == null) {
      return false;
    }
    return true;

  }

  logout(): void {
    this.afAuth.auth.signOut()
      .then((res) => {
        return this.router.navigate(['/']);
      });
  }
}

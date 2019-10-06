import { Router } from '@angular/router';
import { AuthService } from '@web/core/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  /**
   * Guard to control access to a route
   * @param {ActivatedRouteSnapshot} - the snapshot of the route being activated
   * @param {RouterStateSnapshot} - the current router state snapshot. Not used but needed to implement the interface
   * @returns {boolean} - whether the user is able to access the route. If not will navigate to login screen
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if(this.authService.isLoggedIn()) {
        return true;
      }

    this.router.navigate([`/login`]);
    return false;
  }
  
}

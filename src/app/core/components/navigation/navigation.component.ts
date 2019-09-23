import { AuthService } from '@app/core/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'fc-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  authenticathedSubscription: Subscription;
  isAuthenticated: boolean;

  constructor(
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.authenticathedSubscription = this.authService.authenticated$.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated);
  }
  ngOnDestroy(): void {
    this.authenticathedSubscription.unsubscribe();
  }

  logout(event: any): void {
    event.preventDefault();
    this.authService.logout();
  }

}

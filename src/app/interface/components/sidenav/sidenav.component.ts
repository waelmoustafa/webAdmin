import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import { User } from '../../models/user';
import { Observable } from 'rxjs';
// import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  isDarkTheme = false;
  dir = 'ltr';
  // users: Observable<User[]>;
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  constructor(
    // private userService: UserService,
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 720px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  isScreenSmall(): boolean {
    return this.mobileQuery.matches;
  }
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
  changeDirection() {
    this.dir = this.dir === 'ltr' ? 'rtl' : 'ltr';
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
  }
}

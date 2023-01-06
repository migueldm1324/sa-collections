import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'sa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  private logger: string = '[HeaderComponent]';
  private routerSubscription$: Subscription = new Subscription();

  public user: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.user = this.userService.getUser();
    this.routerSubscription$ = this.router
      .events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          console.log(this.logger, event);
          this.user = this.userService.getUser();
          this.checkUser();
        }
      });
    this.checkUser();
  }

  ngOnDestroy(): void {
    this.routerSubscription$.unsubscribe();
  }

  private checkUser() {
    console.log(this.logger, 'User check');
    if (!this.user) {
      this.router.navigate(['']);
    }
  }
}

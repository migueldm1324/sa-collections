import { Component, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { UserService } from "src/app/services/user.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  private userSubscription$: Subscription = new Subscription();
  private logger: string = '[HomeComponent]';

  public userForm = this.formBuilder.group({
    username: ''
  });

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.userService.clearUser();
  }

  ngOnDestroy(): void {
    this.userSubscription$.unsubscribe();
  }

  public onSubmit() {
    if (this.userForm.value && this.userForm.value.username) {
      this.userSubscription$ = this.userService
        .getUserByUsername(this.userForm.value.username)
        .subscribe(data => {
          if (data && data.length) {
            console.log(this.logger, 'Setting User ->', data[0]);
            this.userService.setUser(data[0]);
            this.router.navigate(['/collections']);
          }
        });
    }
  }
}

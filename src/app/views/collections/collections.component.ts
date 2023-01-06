import { Component, OnInit, OnDestroy } from '@angular/core';
import { Collection } from '../../models/collection.model';
import { CollectionsService } from 'src/app/services/collections.service';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'collections',
  templateUrl: './collections.component.html',
  styleUrls:['./collections.component.scss'],
})
export class CollectionsComponent implements OnInit, OnDestroy {
  private logger: string = '[CollectionsComponent]';
  private collectionsSubscription$: Subscription = new Subscription();
  private user: User;

  public collections: Array<Collection> = [];
  
  constructor(
    private collectionsService: CollectionsService,
    private userService: UserService
  ) {
    this.user = this.userService.getUser();
    if (this.user) {
      this.collectionsSubscription$ = this.collectionsService
        .getCollectionsByUserId(this.user.id)
        .subscribe(data => {
          console.log(this.logger, 'Collections fetched');
          this.collections = data;
        });
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.collectionsSubscription$.unsubscribe();
  }
}
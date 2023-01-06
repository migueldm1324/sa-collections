import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { UserService } from 'src/app/services/user.service';
import { Item } from 'src/app/models/item.model';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.scss']
})
export class CollectionDetailComponent implements OnInit, OnDestroy {
  private logger: string = '[CollectionDetailComponent]';
  private itemSubscription$: Subscription = new Subscription();
  private user: User;

  public title: string = 'No Collection selected';
  public items: Array<Item> = [];

  constructor(
    private router: Router,
    private itemsService: ItemsService,
    private userService: UserService
  ) {
    const url: Array<string> = this.router.url.split('/');
    this.title = url[url.length - 1]; 
    this.user = this.userService.getUser();
    if (this.user) {
      this.itemSubscription$ = this.itemsService
        .getItemsByUserIdAndCategory(this.user.id, this.title)
        .subscribe(data => {
          console.log(this.logger, 'Items fetched');
          this.items = data;
        });
    }
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.itemSubscription$.unsubscribe();
  }
}
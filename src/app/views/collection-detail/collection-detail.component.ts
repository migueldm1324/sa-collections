import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { UserService } from 'src/app/services/user.service';
import { TitlesService } from 'src/app/services/titles.service';
import { Item, ItemComposed } from 'src/app/models/item.model';
import { User } from 'src/app/models/user.model';
import { Title } from 'src/app/models/title.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.scss']
})
export class CollectionDetailComponent implements OnInit, OnDestroy {
  private logger: string = '[CollectionDetailComponent]';
  private itemSubscription$: Subscription = new Subscription();
  private titlesSubscription$: Subscription = new Subscription();
  private user: User;

  public title: string = 'No Collection selected';
  public items: Array<Item> = [];
  public titles: Array<Title> = [];
  public composedItems: Array<ItemComposed> = [];

  constructor(
    private router: Router,
    private itemsService: ItemsService,
    private userService: UserService,
    private titlesService: TitlesService
  ) {
    const url: Array<string> = this.router.url.split('/');
    this.title = url[url.length - 1]; 
    this.user = this.userService.getUser();
    if (this.user) {
      this.itemsSubscription();
      this.titlesSubscription();
    }
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.itemSubscription$.unsubscribe();
    this.titlesSubscription$.unsubscribe();
  }

  private itemsSubscription() {
    this.itemSubscription$ = this.itemsService
      .getItemsByUserIdAndCategory(this.user.id, this.title)
      .subscribe(data => {
        console.log(this.logger, 'Items fetched');
        this.items = data;
        if (this.titles.length) {
          this.generateComposedItems();
        }
      });
  }

  private titlesSubscription() {
    this.titlesSubscription$ = this.titlesService
      .getTItlesByUserIdAndCategory(this.user.id, this.title)
      .subscribe(data => {
        console.log(this.logger, 'Titles fetched');
        this.titles = data;
        if (this.items.length) {
          this.generateComposedItems();
        }
      });
  }

  private generateComposedItems() {
    this.composedItems = this.items.map(item => {
      const itemTitle = this.titles.find(title => title.itemId === item.id);
      return { ...item, title: itemTitle ? itemTitle.title : 'No Title' };
    });
  }
}
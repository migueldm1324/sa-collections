import { Component } from '@angular/core';
import { Collection } from '../../store/models/collection.model';

@Component({
  selector: 'collections',
  templateUrl: './collections.component.html',
  styleUrls:['./collections.component.scss']
})
export class CollectionsComponent {
  public collections: Array<Collection> = [{
    name: 'Coins',
    url: './coins'
  }, {
    name: 'Books',
    url: './books'
  }, {
    name: 'Movies',
    url: './movies'
  }];
  constructor() {}
}
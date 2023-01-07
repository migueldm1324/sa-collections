import { Component, Input } from '@angular/core';
import { ItemComposed } from 'src/app/models/item.model';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item: ItemComposed | undefined;
}
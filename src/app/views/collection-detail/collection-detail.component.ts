import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.scss']
})
export class CollectionDetailComponent implements OnInit {
  public title: string = 'No Collection selected';

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    const url: Array<string> = this.router.url.split('/');
    this.title = url[url.length - 1]; 
  }
}
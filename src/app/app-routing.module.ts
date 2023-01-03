import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './views/collections/collections.component';
import { CollectionDetailComponent } from './views/collection-detail/collection-detail.component';

const routes: Routes = [
  {
    path: 'collections',
    component: CollectionsComponent,
    children: [
      { path: 'coins', component: CollectionDetailComponent },
      { path: 'movies', component: CollectionDetailComponent },
      { path: 'books', component: CollectionDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

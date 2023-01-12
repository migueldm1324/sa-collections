import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './views/collections/collections.component';
import { CollectionDetailComponent } from './views/collection-detail/collection-detail.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'collections',
    component: CollectionsComponent,
    children: [
      { path: 'coins', component: CollectionDetailComponent },
      { path: 'movies', component: CollectionDetailComponent },
      { path: 'books', component: CollectionDetailComponent },
      { path: 'series', component: CollectionDetailComponent },
      { path: 'stickers', component: CollectionDetailComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

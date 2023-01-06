import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Views
import { CollectionsComponent } from './views/collections/collections.component';
import { CollectionDetailComponent } from './views/collection-detail/collection-detail.component';
import { HomeComponent } from './views/home/home.component';

// Components
import { HeaderComponent } from './components/header/header.component';

// Services
import { CollectionsService } from './services/collections.service';
import { UserService } from './services/user.service';
import { ItemsService } from './services/items.service';

@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    CollectionDetailComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CollectionsService,
    UserService,
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

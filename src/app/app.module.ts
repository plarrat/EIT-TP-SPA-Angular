import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { TitreComponent } from './titre/titre.component';
import { CategoryAddPageComponent } from './category-add-page/category-add-page.component';
import { FormsModule } from '@angular/forms';
import { CategoryUpdatePageComponent } from './category-update-page/category-update-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    CategoryPageComponent,
    TitreComponent,
    CategoryAddPageComponent,
    CategoryUpdatePageComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

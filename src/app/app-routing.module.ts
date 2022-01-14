import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CategoryAddPageComponent } from './category-add-page/category-add-page.component';
import { CategoryUpdatePageComponent } from './category-update-page/category-update-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'category', component: CategoryPageComponent },
  { path: 'category/add', component: CategoryAddPageComponent },
  { path: 'category/update/:id', component: CategoryUpdatePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

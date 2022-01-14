import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  liste: any;
  constructor(public categoryService: CategoryService) {}

  ngOnInit(): void {
    this.liste = this.categoryService.getListe();
  }

  delete(id: number) {
    let res = confirm('Etes-vous sûr de vouloir supprimer la catégorie ? ');
    if (res) this.categoryService.deleteCategory(id);
  }
}

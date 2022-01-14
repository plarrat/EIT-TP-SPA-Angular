import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add-page',
  templateUrl: './category-add-page.component.html',
  styleUrls: ['./category-add-page.component.scss'],
})
export class CategoryAddPageComponent implements OnInit {
  form: any;
  constructor(public categoryService: CategoryService, public router: Router) {
    this.form = {
      nom: '',
      description: '',
    };
  }

  add(): void {
    this.categoryService.addCategory(this.form);
    this.router.navigate(['/category']);
  }

  reset(): void {
    this.form = {
      nom: '',
      description: '',
    };
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-update-page',
  templateUrl: './category-update-page.component.html',
  styleUrls: ['./category-update-page.component.scss'],
})
export class CategoryUpdatePageComponent implements OnInit {
  category: any;
  form: any;
  constructor(
    public categoryService: CategoryService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.form = {
      nom: '',
      description: '',
    };
  }
  update(): void {
    this.categoryService.updateCategory(this.form);
    this.router.navigate(['/category']);
  }

  reset(): void {
    this.form = { ...this.category };
  }
  ngOnInit(): void {
    let id: any;
    this.categoryService.getListe();
    this.route.params.subscribe((params) => (id = params['id']));
    this.category = this.categoryService.getCategoryById(id);
    this.form = { ...this.category };
    console.log(this.form);
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryUpdatePageComponent } from './category-update-page.component';

describe('CategoryUpdatePageComponent', () => {
  let component: CategoryUpdatePageComponent;
  let fixture: ComponentFixture<CategoryUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryUpdatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

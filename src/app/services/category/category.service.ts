import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  liste: any;
  constructor() {
    this.liste = [];
  }

  getListe(): [] {
    let res = localStorage.getItem('categoryJeux');
    if (res != null) this.liste = JSON.parse(res);
    return this.liste;
  }

  generateId(): number {
    return Date.now();
  }

  addCategory(form: any): void {
    const id = this.generateId();
    form.id = id;
    this.liste.push(form);
    localStorage.setItem('categoryJeux', JSON.stringify(this.liste));
  }

  updateCategory(form: any): void {
    const id = form.id;
    let elem = this.getCategoryById(id);
    if (!elem.id) alert('Erreur lors de la modification');
    else {
      let indice = this.liste.indexOf(elem);
      if (indice > -1) this.liste[indice] = form;
      localStorage.setItem('categoryJeux', JSON.stringify(this.liste));
      this.getListe();
    }
  }

  getCategoryById(id: number): any {
    return this.liste.find((elem: any) => elem.id == id);
  }

  deleteCategory(id: number): void {
    let elem = this.getCategoryById(id);
    if (!elem.id) alert('Erreur lors de la suppression');
    else {
      let indice = this.liste.indexOf(elem);
      this.liste.splice(indice, 1);
      localStorage.setItem('categoryJeux', JSON.stringify(this.liste));
      this.getListe();
    }
  }
}

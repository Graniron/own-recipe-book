import { Recipe } from './recipe';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg', []),
    new Recipe('Summer salad', 'Okayish', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}

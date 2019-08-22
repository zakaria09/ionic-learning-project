import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Cake',
      imageUrl: 'https://picsum.photos/200/300?random=1',
      ingredients: ['flour', 'milk', 'butter']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://picsum.photos/200/300?random=2',
      ingredients: ['pasta', 'tomato', 'cheese']
    }
  ];

  constructor() { }

  getAllRecipes() {;
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes
      .find(recipe => recipe.id === recipeId)};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(r => r.id !== recipeId);
  }
}

import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Cake',
      imageUrl: 'https://picsum.photos/200/300?random=1',
      ingredients: ['flour', 'milk', 'butter']
    },
    {
      id: 'r1',
      title: 'Spaghetti',
      imageUrl: 'https://picsum.photos/200/300?random=2',
      ingredients: ['pasta', 'tomato', 'cheese']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

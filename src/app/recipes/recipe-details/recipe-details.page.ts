import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

    ngOnInit() {
      this.activatedRoute.paramMap
      .subscribe(route => {
        if (!route.has('recipeId')) {
          this.router.navigate(['/recipes']);
          return;
        }
        const recipeId = route.get('recipeId');
        this.recipe = this.recipeService.getRecipe(recipeId);
      });
  }

  onDelete() {
    console.log(this.recipe.id)
    this.alertCtrl.create({
      header: 'Are You Sure?', 
      message: `Do you really want to delete ${this.recipe.title}`,
      buttons: [
      {
        text: 'Cancel',
        role: ' cancel'
      },
        {
          text: 'Delete',
          handler: () => {
            this.recipeService.deleteRecipe(this.recipe.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEl => alertEl.present());
  }
}

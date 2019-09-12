import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeId: number;
  recipe: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    //this.recipe = recipeService.getRecipes()[route.snapshot.params['id']];
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeId = +params['id'];
        this.recipe = this.recipeService.getRecipes()[this.recipeId];
      }
    );
  }

  ngOnInit() {
  }

  onToShoppingListClick() {
    for (const ingredient of this.recipe.ingredients)
      this.shoppingListService.addIngredient(ingredient);
  }

  onEditClick() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}

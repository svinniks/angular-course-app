import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipesService {
    private _recipes: Recipe[] = [

        new Recipe(
            'A Test Recipe', 
            'A Test Description', 'https://downshiftology.com/wp-content/uploads/2015/11/shakshuka-12.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French fries', 20)
            ]
        ),

        new Recipe(
            'Another Test Recipe', 'Another Test Description', 
            'https://downshiftology.com/wp-content/uploads/2015/11/shakshuka-12.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]
        )

    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this._recipes.slice();
    }
}
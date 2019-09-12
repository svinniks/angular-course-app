import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService, private router: Router) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['/recipes', 'new']);
  }
}

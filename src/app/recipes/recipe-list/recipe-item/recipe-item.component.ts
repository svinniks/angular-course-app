import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()
  recipe: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  onClick() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }
}

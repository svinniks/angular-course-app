import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false})
  nameInputRef: ElementRef<HTMLInputElement>;

  @ViewChild('amountInput', {static: false})
  amountInputRef: ElementRef<HTMLInputElement>;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddClick() {
    this.shoppingListService.addIngredient(new Ingredient(
      this.nameInputRef.nativeElement.value, 
      parseInt(this.amountInputRef.nativeElement.value)
    ));
  }
}

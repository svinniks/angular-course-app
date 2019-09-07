import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('select')
  selected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onRecipe() {
    this.selected.emit('recipe');
  }

  onShoppingList() {
    this.selected.emit('shoppingList');
  }

}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductState } from '../../store/ProductState';
import { selectProducts } from '../../store/ProductSelectors';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list-component',
  imports: [NgIf,AsyncPipe,RouterLink],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {

  products$;
  constructor(private store:Store<{productStateGlobal:ProductState}>) { 
    this.store.dispatch({type:'[Product] Load Products'});
    this.products$= this.store.select(selectProducts);
  }

  
}

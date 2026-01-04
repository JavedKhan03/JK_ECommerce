import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list-component/product-list-component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-gallery-component',
  imports: [ProductListComponent,RouterOutlet],
  templateUrl: './product-gallery-component.html',
  styleUrl: './product-gallery-component.css',
})
export class ProductGalleryComponent {

}

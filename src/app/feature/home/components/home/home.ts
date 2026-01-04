import { Component } from '@angular/core';
import { Header } from '../../../../shared/components/header/header';
import { ProductGalleryComponent } from '../../../product/components/product-gallery-component/product-gallery-component';

@Component({
  selector: 'app-home',
  imports: [Header,ProductGalleryComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

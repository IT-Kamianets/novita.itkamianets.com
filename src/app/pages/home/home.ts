import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { InstagramFeedComponent } from '../../components/instagram-feed/instagram-feed';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, InstagramFeedComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  private productService = inject(ProductService);
  products: Product[] = [];

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data.slice(0, 3);
    });
  }
}

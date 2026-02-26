import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product, CATEGORIES } from '../../models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, TranslateModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductService);
  products: Product[] = [];
  filteredProducts: Product[] = [];
  
  categories = ['ALL', ...CATEGORIES];
  selectedCategory = 'ALL';

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'ALL') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(p => p.category === category);
    }
  }

  getCategoryKey(category: string): string {
    if (category === 'ALL') return 'PRODUCTS.CATEGORIES.ALL';
    return category; // It's already a key
  }
}

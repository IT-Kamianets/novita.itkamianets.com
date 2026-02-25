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
  
  categoryMapping: {[key: string]: string} = {
    'Усі': 'PRODUCTS.CATEGORIES.ALL',
    'Ватна продукція': 'PRODUCTS.CATEGORIES.COTTON',
    'Інтимна гігієна': 'PRODUCTS.CATEGORIES.INTIMATE',
    'Вологі серветки': 'PRODUCTS.CATEGORIES.WIPES',
    'Зняття макіяжу': 'PRODUCTS.CATEGORIES.MAKEUP'
  };

  categories = ['Усі', ...CATEGORIES];
  selectedCategory = 'Усі';

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'Усі') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(p => p.category === category);
    }
  }
}

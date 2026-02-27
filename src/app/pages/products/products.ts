import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product, CATEGORIES } from '../../models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, TranslateModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  products: Product[] = [];
  filteredProducts: Product[] = [];
  
  categories = ['ALL', ...CATEGORIES];
  selectedCategory = 'ALL';
  selectedFeature: string | null = null;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedFeature = params['feature'] || null;
      
      this.productService.getProducts().subscribe(data => {
        this.products = data;
        this.applyFilters();
      });
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  filterByFeature(feature: string) {
    this.selectedFeature = feature;
    this.applyFilters();
  }

  clearFeatureFilter() {
    this.selectedFeature = null;
    this.applyFilters();
  }

  private applyFilters() {
    let result = this.products;

    if (this.selectedCategory !== 'ALL') {
      result = result.filter(p => p.category === this.selectedCategory);
    }

    if (this.selectedFeature) {
      result = result.filter(p => p.features && p.features.includes(this.selectedFeature!));
    }

    this.filteredProducts = result;
  }

  getCategoryKey(category: string): string {
    if (category === 'ALL') return 'PRODUCTS.CATEGORIES.ALL';
    return category; // It's already a key
  }
}

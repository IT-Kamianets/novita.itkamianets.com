import { Component, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @ViewChild('card') cardElement!: ElementRef;

  onMouseMove(event: MouseEvent) {
    if (!this.cardElement) return;

    // Use the listener element (currentTarget) to get stable coordinates
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((centerX - x) / centerX) * 15;

    this.cardElement.nativeElement.style.setProperty('--rotateX', `${rotateX}deg`);
    this.cardElement.nativeElement.style.setProperty('--rotateY', `${rotateY}deg`);
  }

  onMouseLeave() {
    if (!this.cardElement) return;
    this.cardElement.nativeElement.style.setProperty('--rotateX', '0deg');
    this.cardElement.nativeElement.style.setProperty('--rotateY', '0deg');
  }
}

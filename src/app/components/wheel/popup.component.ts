import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CategorySection {
  id: number;
  image: string;
  name: string;
  price: string;
  oldPrice: string;
  detail: string;
}

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  @Input() category: CategorySection | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() addCartItem = new EventEmitter<{ item: CategorySection, quantity: number }>();

  quantity: number = 1;

  incrementQty() {
    this.quantity++;
  }

  decrementQty() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    if (this.category) {
      this.addCartItem.emit({ item: this.category, quantity: this.quantity });
    }
    // Optionally close popup or show feedback
  }

  onClose() {
    this.close.emit();
  }
} 
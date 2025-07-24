import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

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

  buyNow() {
    if (this.category) {
      // Get current cart from localStorage
      const savedCart = localStorage.getItem('cartItems');
      let cartItems: any[] = savedCart ? JSON.parse(savedCart) : [];
      // Check if item already exists in cart
      const index = cartItems.findIndex((c: any) => c.item && c.item.id === this.category!.id);
      if (index > -1) {
        cartItems[index].quantity += this.quantity;
      } else {
        cartItems.push({ item: this.category, quantity: this.quantity });
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      this.router.navigate(['/checkout']);
    }
  }

  onClose() {
    this.close.emit();
  }
} 
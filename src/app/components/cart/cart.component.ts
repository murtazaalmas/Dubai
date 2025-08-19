import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems: { item: any, quantity: number }[] = [];
  shipping = 500;
  orderNote = '';

  ngOnInit() {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
    }
  }

  saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  incrementCartQty(index: number) {
    this.cartItems[index].quantity++;
    this.saveCart();
  }

  decrementCartQty(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.saveCart();
    }
  }

  onCartQtyInput(index: number, value: string) {
    const parsedValue = parseInt(value, 10);
    const qty = Math.max(1, isNaN(parsedValue) ? 1 : parsedValue);
    this.cartItems[index].quantity = qty;
    this.saveCart();
  }

  removeCartItem(index: number) {
    this.cartItems.splice(index, 1);
    this.saveCart();
  }

  getSubtotal(): number {
    return this.cartItems.reduce((sum, c) => sum + (c.item.price * c.quantity), 0);
  }

  getTotal(): number {
    return this.getSubtotal() + this.shipping;
  }
} 
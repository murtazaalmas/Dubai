import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {
  cartItems: { item: any, quantity: number }[] = [];
  shipping = 500;

  ngOnInit() {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
    }
  }

  getSubtotal(): number {
    return this.cartItems.reduce((sum, c) => sum + (c.item.price * c.quantity), 0);
  }

  getTotal(): number {
    return this.getSubtotal() + this.shipping;
  }

  formatPKR(amount: number): string {
    return 'PKR ' + Math.round(amount).toLocaleString('en-PK');
  }
} 
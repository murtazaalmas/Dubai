import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

export interface CartItem {
  item: CategorySection;
  quantity: number;
}

export interface CategorySection {
  id: number;
  categoryId: number;
  image: string;
  name: string;
  price: number;
  oldPrice: number;
  sku: string;
  categories: string;
  availability: string;
  detail: string;
}

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private cartItemsSource = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSource.asObservable();

  private toastMessageSource = new BehaviorSubject<string | null>(null);
  toastMessage$ = this.toastMessageSource.asObservable().pipe(
    tap(message => {
      if (message) {
        timer(3000).subscribe(() => this.toastMessageSource.next(null));
      }
    })
  );

  constructor() { 
    this.loadCart();
  }

  private loadCart(): void {
    const cart = localStorage.getItem('cartItems');
    if (cart) {
      this.cartItemsSource.next(JSON.parse(cart));
    }
  }

  private saveCart(cart: CartItem[]): void {
    localStorage.setItem('cartItems', JSON.stringify(cart));
    this.cartItemsSource.next(cart);
  }

  showToastMessage(message: string): void {
    this.toastMessageSource.next(message);
  }

  addToCart(item: CategorySection, quantity: number): void {
    const currentCart = this.cartItemsSource.value;
    const existingItemIndex = currentCart.findIndex(cartItem => cartItem.item.id === item.id);

    if (existingItemIndex > -1) {
      currentCart[existingItemIndex].quantity += quantity;
    } else {
      currentCart.push({ item, quantity });
    }

    this.saveCart(currentCart);
    this.showToastMessage('Item added to cart!');
  }

  removeItem(itemId: number): void {
    const updatedCart = this.cartItemsSource.value.filter(cartItem => cartItem.item.id !== itemId);
    this.saveCart(updatedCart);
  }

  updateItemQuantity(itemId: number, quantity: number): void {
    const currentCart = this.cartItemsSource.value;
    const itemIndex = currentCart.findIndex(cartItem => cartItem.item.id === itemId);

    if (itemIndex > -1) {
      currentCart[itemIndex].quantity = quantity;
      if (currentCart[itemIndex].quantity <= 0) {
        this.removeItem(itemId);
      } else {
        this.saveCart(currentCart);
      }
    }
  }

  getWheelCategorySections(): CategorySection[] {
    return [

      // alloy-rims-cd70
      {
        id: 1,
        categoryId: 1,
        image: '/assets/images/images1.jpeg',
        name: 'Crown Red Alloy Rims for Honda CD70 – Premium Quality',
        price: 23000,
        oldPrice: 25000,
        sku: "Crown‑Red‑CD70",
        categories: "Alloy Rims‑CD70",
        availability: "", // (Not specified; you can fill if known)
        detail: "Premium Crown Red Alloy Rims—bold red finish, sleek lightweight design."
      },
      {
        id: 2,
        categoryId: 1,
        image: '/assets/images/images2.jpeg',
        name: 'Alloyrims Silver CD70 | Star Shape | Premium Quality',
        price: 21999,
        oldPrice: 22900,
        sku: "Alloyrims‑Silver‑Star‑CD70",
        categories: "Alloy Rims‑CD70",
        availability: "",
        detail: "Star‑shape design for aesthetic look and better grip."
      },
      {
        id: 3,
        categoryId: 1,
        image: '/assets/images/images3.jpeg',
        name: 'Silver Curve Alloy Rims for CD70 – Durable & Sleek Design',
        price: 23000,
        oldPrice: 25000,
        sku: "Silver‑Curve‑CD70",
        categories: "Alloy Rims‑CD70",
        availability: "",
        detail: "Stylish, strong aluminum—lightweight and modern."
      },
      {
        id: 4,
        categoryId: 1,
        image: '/assets/images/images4.jpeg',
        name: 'Crown Golden Alloy Rims for Honda CD70 – Elegant & Durable',
        price: 23000,
        oldPrice: 25000,
        sku: "Crown‑Golden‑CD70",
        categories: "Alloy Rims‑CD70",
        availability: "",
        detail: "Luxurious golden finish—combines style and performance."
      },
      {
        id: 5,
        categoryId: 1,
        image: '/assets/images/images5.jpeg',
        name: 'Alloyrims CD70 | YBR Shape Blue Outline | Premium Quality',
        price: 21999,
        oldPrice: 0, // No old price listed
        sku: "Alloyrims‑YBR‑Blue‑CD70",
        categories: "Alloy Rims‑CD70",
        availability: "",
        detail: "Sleek YBR‑shape design with striking blue outline."
      },
      {
        id: 6,
        categoryId: 1,
        image: '/assets/images/images6.jpeg',
        name: 'Premium Red Curve Alloy Rims for CD70 – Stylish & Durable Design',
        price: 23000,
        oldPrice: 25000,
        sku: "Premium‑Red‑Curve‑CD70",
        categories: "Alloy Rims‑CD70",
        availability: "",
        detail: "Modern curved red finish—style meets performance."
      },
      {
        id: 7,
        categoryId: 1,
        image: '/assets/images/images7.jpeg',
        name: 'Curve Golden Alloy Rims for Honda CD70 – Stylish & Durable',
        price: 23000,
        oldPrice: 25000,
        sku: "Curve‑Golden‑CD70",
        categories: "Alloy Rims‑CD70",
        availability: "",
        detail: "Striking golden curved design for elegance and durability."
      },

      // 125-alloy-rim
      {
        id: 8,
        categoryId: 2,
        image: '/assets/images/images8.jpeg',
        name: 'YBR‑Shape Alloy Rims for Honda CG125',
        price: 34999,
        oldPrice: 38000,
        sku: "YBR‑Shape‑CG125",
        categories: "Alloy Rims‑CG125",
        availability: "In Stock",
        detail: "High-quality YBR-style alloy rims with durable finish. Suitable for Honda CG125. Includes front and rear rim set."
      },
    

    ];
  }

}
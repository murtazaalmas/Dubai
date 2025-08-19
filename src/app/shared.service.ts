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
  name: string,
  price: number;
  oldPrice: number;
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

  getCategorySection(): CategorySection[] {
    return [
      // T-Shirts
      {
        id: 1,
        categoryId: 1,
        image: '/assets/images/images1.jpeg',
        name: 'Classic Crew Neck T-Shirt',
        price: 1500,
        oldPrice: 2000,
        categories: "T-Shirts",
        availability: "In Stock",
        detail: "A classic crew neck t-shirt made from 100% premium cotton."
      },
      {
        id: 2,
        categoryId: 1,
        image: '/assets/images/images2.jpeg',
        name: 'V-Neck T-Shirt',
        price: 1600,
        oldPrice: 2100,
        categories: "T-Shirts",
        availability: "In Stock",
        detail: "A stylish v-neck t-shirt, perfect for a casual look."
      },

      // Jeans
      {
        id: 3,
        categoryId: 1,
        image: '/assets/images/images3.jpeg',
        name: 'Slim-Fit Denim Jeans',
        price: 3500,
        oldPrice: 4000,
        categories: "Jeans",
        availability: "In Stock",
        detail: "Modern slim-fit jeans made from high-quality stretch denim."
      },
      {
        id: 4,
        categoryId: 1,
        image: '/assets/images/images4.jpeg',
        name: 'Relaxed-Fit Jeans',
        price: 3200,
        oldPrice: 3800,
        categories: "Jeans",
        availability: "Out of Stock",
        detail: "Comfortable relaxed-fit jeans for everyday wear."
      },

      // Hoodies
      {
        id: 5,
        categoryId: 1,
        image: '/assets/images/images5.jpeg',
        name: 'Pullover Hoodie',
        price: 4500,
        oldPrice: 5000,
        categories: "Hoodies",
        availability: "In Stock",
        detail: "A warm and cozy pullover hoodie with a front pocket."
      },
      {
        id: 6,
        categoryId: 2,
        image: '/assets/images/images6.jpeg',
        name: 'Zip-Up Hoodie',
        price: 4800,
        oldPrice: 5500,
        categories: "Hoodies",
        availability: "In Stock",
        detail: "A versatile zip-up hoodie made from soft fleece."
      },

      // Dresses
      {
        id: 7,
        categoryId: 2,
        image: '/assets/images/images7.jpeg',
        name: 'Summer Floral Dress',
        price: 4200,
        oldPrice: 4800,
        categories: 'Dresses',
        availability: 'In Stock',
        detail: 'A light and airy floral dress, perfect for summer.'
      },
      {
        id: 8,
        categoryId: 2,
        image: '/assets/images/images8.jpeg',
        name: 'Elegant Evening Gown',
        price: 8500,
        oldPrice: 9500,
        categories: 'Dresses',
        availability: 'In Stock',
        detail: 'A stunning evening gown for special occasions.'
      },
      {
        id: 9,
        categoryId: 2,
        image: '/assets/images/images1.jpeg',
        name: 'Casual T-Shirt Dress',
        price: 2800,
        oldPrice: 3200,
        categories: 'Dresses',
        availability: 'In Stock',
        detail: 'A comfortable and casual t-shirt dress.'
      },
      {
        id: 10,
        categoryId: 2,
        image: '/assets/images/images1.jpeg',
        name: 'Bohemian Maxi Dress',
        price: 5500,
        oldPrice: 6000,
        categories: 'Dresses',
        availability: 'Out of Stock',
        detail: 'A flowy bohemian maxi dress with intricate patterns.'
      },
      {
        id: 11,
        categoryId: 3,
        image: '/assets/images/images1.jpeg',
        name: 'Office Sheath Dress',
        price: 6200,
        oldPrice: 7000,
        categories: 'Dresses',
        availability: 'In Stock',
        detail: 'A professional and stylish sheath dress for the office.'
      },

      // Jackets
      {
        id: 12,
        categoryId: 3,
        image: '/assets/images/images1.jpeg',
        name: 'Classic Denim Jacket',
        price: 5800,
        oldPrice: 6500,
        categories: 'Jackets',
        availability: 'In Stock',
        detail: 'A timeless denim jacket that never goes out of style.'
      },
      {
        id: 13,
        categoryId: 3,
        image: '/assets/images/images1.jpeg',
        name: 'Leather Biker Jacket',
        price: 12000,
        oldPrice: 14000,
        categories: 'Jackets',
        availability: 'In Stock',
        detail: 'A cool and edgy leather biker jacket.'
      },
      {
        id: 14,
        categoryId: 3,
        image: '/assets/images/images1.jpeg',
        name: 'Lightweight Bomber Jacket',
        price: 6500,
        oldPrice: 7200,
        categories: 'Jackets',
        availability: 'In Stock',
        detail: 'A versatile and lightweight bomber jacket.'
      },
      {
        id: 15,
        categoryId: 3,
        image: '/assets/images/images1.jpeg',
        name: 'Winter Parka',
        price: 15000,
        oldPrice: 17000,
        categories: 'Jackets',
        availability: 'In Stock',
        detail: 'A warm and insulated winter parka with a faux fur hood.'
      },
      {
        id: 16,
        categoryId: 3,
        image: '/assets/images/images1.jpeg',
        name: 'Stylish Trench Coat',
        price: 11000,
        oldPrice: 12500,
        categories: 'Jackets',
        availability: 'Out of Stock',
        detail: 'An elegant and classic trench coat.'
      },

      // Shorts
      {
        id: 17,
        categoryId: 3,
        image: '/assets/images/images1.jpeg',
        name: 'Denim Cut-Off Shorts',
        price: 2500,
        oldPrice: 2800,
        categories: 'Shorts',
        availability: 'In Stock',
        detail: 'Classic denim cut-off shorts for a casual summer look.'
      },
      {
        id: 18,
        categoryId: 3,
        image: '/assets/images/images1.jpeg',
        name: 'High-Waisted Linen Shorts',
        price: 3200,
        oldPrice: 3600,
        categories: 'Shorts',
        availability: 'In Stock',
        detail: 'Comfortable and chic high-waisted linen shorts.'
      },
      {
        id: 19,
        categoryId: 3,
        image: '/assets/images/images1.jpeg',
        name: 'Athletic Running Shorts',
        price: 2200,
        oldPrice: 2500,
        categories: 'Shorts',
        availability: 'In Stock',
        detail: 'Lightweight and breathable athletic shorts for running.'
      },
      {
        id: 20,
        categoryId: 3,
        image: '/assets/images/images1.jpeg',
        name: 'Cargo Shorts',
        price: 3000,
        oldPrice: 3400,
        categories: 'Shorts',
        availability: 'In Stock',
        detail: 'Practical cargo shorts with multiple pockets.'
      },
      {
        id: 21,
        categoryId: 3,
        image: '/assets/images/images1.jpeg',
        name: 'Tailored Chino Shorts',
        price: 3500,
        oldPrice: 4000,
        categories: 'Shorts',
        availability: 'Out of Stock',
        detail: 'Smart and tailored chino shorts for a polished look.'
      },

      // Sweaters
      {
        id: 22,
        categoryId: 3,
        image: '/assets/images/images1.jpeg',
        name: 'Cable-Knit Sweater',
        price: 5200,
        oldPrice: 5800,
        categories: 'Sweaters',
        availability: 'In Stock',
        detail: 'A classic and cozy cable-knit sweater.'
      },
      {
        id: 23,
        categoryId: 3,
        image: '/assets/images/images1.jpeg',
        name: 'Turtleneck Sweater',
        price: 5500,
        oldPrice: 6000,
        categories: 'Sweaters',
        availability: 'In Stock',
        detail: 'An elegant turtleneck sweater made from soft wool.'
      },
      {
        id: 24,
        categoryId: 3,
        image: '/assets/images/images1.jpeg',
        name: 'Cashmere V-Neck Sweater',
        price: 9500,
        oldPrice: 11000,
        categories: 'Sweaters',
        availability: 'In Stock',
        detail: 'A luxurious cashmere v-neck sweater.'
      },
      {
        id: 25,
        categoryId: 3,
        image: '/assets/images/images1.jpeg',
        name: 'Oversized Cardigan',
        price: 6800,
        oldPrice: 7500,
        categories: 'Sweaters',
        availability: 'In Stock',
        detail: 'A comfortable and stylish oversized cardigan.'
      },
      {
        id: 26,
        categoryId: 3,
        image: '/assets/images/images1.jpeg',
        name: 'Fair Isle Sweater',
        price: 7200,
        oldPrice: 8000,
        categories: 'Sweaters',
        availability: 'Out of Stock',
        detail: 'A traditional Fair Isle sweater with a festive pattern.'
      }
    ];
  }

  getNewArrivals(): CategorySection[] {
    // Returning a subset of products as new arrivals for now
    return this.getCategorySection().slice(0, 7);
  }

}
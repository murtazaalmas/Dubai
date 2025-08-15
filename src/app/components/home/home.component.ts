import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';
import { CategorySection } from '../../shared.service';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent, CommonModule, PopupComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  currentSlide = 0;
  currentProductSlide = 0;
  sliderInterval: any;
  showPopup = false;
  selectedProduct: CategorySection | null = null;
  cartItems: { item: CategorySection, quantity: number }[] = [];

  sliderImages = [
    {
      image1: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      image2: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Premium Tracksuits',
      description: 'Discover the finest quality tracksuits for your active lifestyle'
    },
    {
      image1: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      image2: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Sportswear Collection',
      description: 'Stylish and comfortable tracksuits for every occasion'
    },
    {
      image1: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      image2: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Athletic Wear',
      description: 'High-performance tracksuits for your fitness journey'
    }
  ];

  productCards: CategorySection[] = [
    {
      id: 101,
      categoryId: 10,
      image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      name: 'Classic White T-Shirt',
      price: 29.99,
      oldPrice: 39.99,
      sku: 'T-SHIRT-001',
      categories: 'T-Shirts',
      availability: 'In Stock',
      detail: 'Premium quality white t-shirt made from 100% cotton. Perfect for everyday wear.'
    },
    {
      id: 102,
      categoryId: 10,
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      name: 'Black Graphic Tee',
      price: 34.99,
      oldPrice: 44.99,
      sku: 'T-SHIRT-002',
      categories: 'T-Shirts',
      availability: 'In Stock',
      detail: 'Stylish black graphic t-shirt with modern design. Made from soft, breathable fabric.'
    },
    {
      id: 103,
      categoryId: 10,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      name: 'Vintage Print T-Shirt',
      price: 39.99,
      oldPrice: 49.99,
      sku: 'T-SHIRT-003',
      categories: 'T-Shirts',
      availability: 'In Stock',
      detail: 'Retro-inspired t-shirt with vintage print. Comfortable fit and durable material.'
    },
    {
      id: 104,
      categoryId: 10,
      image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      name: 'Cotton V-Neck Tee',
      price: 24.99,
      oldPrice: 32.99,
      sku: 'T-SHIRT-004',
      categories: 'T-Shirts',
      availability: 'In Stock',
      detail: 'Classic v-neck t-shirt made from premium cotton. Comfortable and versatile for any occasion.'
    },
    {
      id: 105,
      categoryId: 10,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      name: 'Striped T-Shirt',
      price: 32.99,
      oldPrice: 42.99,
      sku: 'T-SHIRT-005',
      categories: 'T-Shirts',
      availability: 'In Stock',
      detail: 'Stylish striped t-shirt with modern design. Perfect for casual outings.'
    },
    {
      id: 106,
      categoryId: 10,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      name: 'Premium Cotton Tee',
      price: 44.99,
      oldPrice: 54.99,
      sku: 'T-SHIRT-006',
      categories: 'T-Shirts',
      availability: 'In Stock',
      detail: 'Premium quality t-shirt made from the finest cotton. Luxurious feel and excellent durability.'
    }
  ];
  
  totalProductSlides = 0;

  ngOnInit() {
    // Start auto slider with a delay to ensure DOM is ready
    setTimeout(() => {
      this.startAutoSlider();
    }, 1000);
    
    // Calculate total product slides
    this.calculateTotalProductSlides();
    
    // Load cart items from localStorage
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
    }
  }
  
  calculateTotalProductSlides() {
    this.totalProductSlides = Math.ceil(this.productCards.length / this.getVisibleCardCount());
  }

  startAutoSlider() {
    // Clear any existing interval
    this.stopAutoSlider();
    
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, 4000); // Change slide every 4 seconds
  }

  stopAutoSlider() {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
      this.sliderInterval = null;
    }
  }
  
  // Popup methods
  openPopup(product: CategorySection) {
    this.selectedProduct = product;
    this.showPopup = true;
  }
  
  closePopup() {
    this.showPopup = false;
    this.selectedProduct = null;
  }
  
  addToCart(product: CategorySection) {
    // Add directly to cart without opening popup
    console.log('Adding to cart:', product);
    
    // Check if item already exists in cart
    const existingItemIndex = this.cartItems.findIndex(item => item.item.id === product.id);
    
    if (existingItemIndex > -1) {
      // Increment quantity if item already exists
      this.cartItems[existingItemIndex].quantity++;
    } else {
      // Add new item with quantity 1
      this.cartItems.push({ item: product, quantity: 1 });
    }
    
    // Save to localStorage
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    
    // Show feedback
    alert(`${product.name} added to cart!`);
  }
  
  onAddCartItem(event: { item: CategorySection, quantity: number }) {
    console.log('Adding to cart with quantity:', event);
    
    // Check if item already exists in cart
    const existingItemIndex = this.cartItems.findIndex(item => item.item.id === event.item.id);
    
    if (existingItemIndex > -1) {
      // Add to quantity if item already exists
      this.cartItems[existingItemIndex].quantity += event.quantity;
    } else {
      // Add new item with specified quantity
      this.cartItems.push({ item: event.item, quantity: event.quantity });
    }
    
    // Save to localStorage
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    
    // Show feedback
    alert(`${event.quantity} x ${event.item.name} added to cart!`);
    this.closePopup();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.sliderImages.length;
    console.log('Next slide:', this.currentSlide); // Debug log
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.sliderImages.length - 1 : this.currentSlide - 1;
    console.log('Previous slide:', this.currentSlide); // Debug log
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    console.log('Go to slide:', this.currentSlide); // Debug log
  }

  nextProductSlide() {
    const visibleCards = this.getVisibleCardCount();
    const maxSlide = Math.ceil(this.productCards.length / visibleCards) - 1;
    if (this.currentProductSlide >= maxSlide) {
      // If at the last slide, go back to the first slide
      this.currentProductSlide = 0;
    } else {
      this.currentProductSlide++;
    }
  }

  previousProductSlide() {
    const visibleCards = this.getVisibleCardCount();
    const maxSlide = Math.ceil(this.productCards.length / visibleCards) - 1;
    if (this.currentProductSlide <= 0) {
      // If at the first slide, go to the last slide
      this.currentProductSlide = maxSlide;
    } else {
      this.currentProductSlide--;
    }
  }
  
  goToProductSlide(index: number) {
    this.currentProductSlide = index;
  }

  getVisibleCardCount(): number {
    // Responsive design - return different number of cards based on screen width
    if (window.innerWidth < 768) {
      return 1;
    } else if (window.innerWidth < 1024) {
      return 2;
    } else {
      return 3;
    }
  }
  
  @HostListener('window:resize')
  onResize() {
    // Reset to first slide when screen size changes to avoid empty slides
    this.currentProductSlide = 0;
    // Recalculate total product slides
    this.calculateTotalProductSlides();
  }

  getProductTransform(): string {
    const visibleCards = this.getVisibleCardCount();
    // Calculate the percentage to move based on the number of cards visible
    // and the current slide index
    return `translateX(-${this.currentProductSlide * (100 / visibleCards)}%)`;
  }
}

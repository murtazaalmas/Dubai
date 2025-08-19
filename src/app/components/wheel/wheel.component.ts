import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';
import { SharedService, CategorySection } from '../../shared.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wheel',
  imports: [CommonModule, FormsModule, NavbarComponent, PopupComponent],
  templateUrl: './wheel.component.html',
  styleUrl: './wheel.component.scss'
})
export class WheelComponent implements OnInit {
  categorySections: CategorySection[] = [];

  selectedView = 1; // 1 to 5 columns
  selectedTab = 1;
  selectedSort: string = 'lowToHigh';
  showPopup: boolean = false;
  popupCategory: CategorySection | null = null;
  cartItems: { item: CategorySection, quantity: number }[] = [];
  showToast = false;
  toastMessage = '';
  showFilterSlider = false;
  sliderOneValue = 30;
  sliderTwoValue = 70;
  sliderMin = 0;
  sliderMax = 100;
  minGap = 0;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.categorySections = this.sharedService.getCategorySection();
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
    }
    // Set sliderOneValue to 0 and sliderMax to the max price
    this.sliderOneValue = 0;
    this.sliderMax = Math.max(...this.categorySections.map(c => c.price));
    this.sliderTwoValue = this.sliderMax;
  }

  saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  setTab(tab: number) {
    this.selectedTab = tab;
  }

  setView(cols: number) {
    this.selectedView = cols;
  }

  onSortChange(sortValue: string) {
    this.selectedSort = sortValue;
  }

  get filteredCategories() {
    let filtered = this.categorySections.filter(
      c => c.categoryId === this.selectedTab &&
           c.price >= this.sliderOneValue &&
           c.price <= this.sliderTwoValue
    );
    if (this.selectedSort === 'lowToHigh') {
      filtered = filtered.slice().sort((a, b) => a.price - b.price);
    } else if (this.selectedSort === 'highToLow') {
      filtered = filtered.slice().sort((a, b) => b.price - a.price);
    }
    return filtered;
  }

  openPopup(category: CategorySection) {
    this.popupCategory = category;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.popupCategory = null;
  }

  onAddCartItem(event: { item: CategorySection, quantity: number }) {
    const existing = this.cartItems.find(ci => ci.item.id === event.item.id && ci.item.name === event.item.name);
    if (existing) {
      existing.quantity += event.quantity;
    } else {
      this.cartItems.push({ item: event.item, quantity: event.quantity });
    }
    this.saveCart();
    this.showToastMessage(`${event.item.name} added to cart!`);
    this.closePopup(); // Optionally close popup after adding
  }

  showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 2000);
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

  get sliderTrackStyle() {
    const percent1 = (this.sliderOneValue / this.sliderMax) * 100;
    const percent2 = (this.sliderTwoValue / this.sliderMax) * 100;
    return {
      background: `linear-gradient(to right, #dadae5 ${percent1}%, #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`
    };
  }

  toggleFilterSlider() {
    this.showFilterSlider = !this.showFilterSlider;
  }

  slideOne() {
    if (this.sliderTwoValue - this.sliderOneValue <= this.minGap) {
      this.sliderOneValue = this.sliderTwoValue - this.minGap;
    }
  }

  slideTwo() {
    if (this.sliderTwoValue - this.sliderOneValue <= this.minGap) {
      this.sliderTwoValue = this.sliderOneValue + this.minGap;
    }
  }
}
